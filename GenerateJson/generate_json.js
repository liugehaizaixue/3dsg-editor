let original_sg_json={
    "nodes":{
        "room":[],
        "pose":[],
        "agent":[],
        "asset":[],
        "object":[]
    },
    "links":[]
}
let sg_json = JSON.parse(JSON.stringify(original_sg_json));


export default function generate_json(editor_context){
    init_generator()
    check_for_duplicate_names(editor_context.nodes)
    /* 整体是由root为根节点的树状结构（除了pose之间相互连接成网），则深度遍历 */
    //先通过所有节点找到root节点
    let root = find_root(editor_context.nodes)
    //根据root的所有子节点，即所有pose节点
    let poses = find_poses(root)
    create_links_for_poses(poses)
    for(let pose of poses){
        create_pose(pose)
        //pose节点的子节点可能分为room与agent节点
        let pose_children = pose.children
        for(let pose_child of pose_children){
            if(pose_child.userData.type=="agent"){
                let _agent = pose_child
                create_agent(_agent)
                create_links(pose,_agent)
                //agent节点的子节点为object
                let objects = _agent.children
                for(let object of objects){
                    create_object(object)
                    create_links(_agent,object)
                }
            }
            else if(pose_child.userData.type=="room"){
                let _room = pose_child
                create_room(_room)
                create_links(pose,_room)
                //room节点的子节点可能分为asset与agent节点
                let room_children = _room.children
                for(let room_child of room_children){
                    if(room_child.userData.type=="agent"){
                        let _agent = room_child
                        create_agent(_agent)
                        create_links(_room,_agent)
                        //agent节点的子节点为object
                        let objects = _agent.children
                        for(let object of objects){
                            create_object(object)
                            create_links(_agent,object)
                        }
                    }
                    else if(room_child.userData.type=="asset"){
                        let _asset = room_child
                        create_asset(_asset)
                        create_links(_room,_asset)
                        //asset节点的子节点为object
                        let objects = _asset.children
                        for(let object of objects){
                            create_object(object)
                            create_links(_asset,object)
                        }                    
                    }
                }
            }
        }
    }
    console.log(sg_json)
    return sg_json
}

function init_generator(){
    sg_json = JSON.parse(JSON.stringify(original_sg_json));
}

function find_root(nodes){
    for(let node of nodes){
        if(node.userData.type == "root"){
            return node
        }
    }
    return ""
}

function find_poses(root){
    return root.children
}

function find_rooms(pose){
    let pose_children = pose.children
    for(let k in pose_children){
        let pose_child = pose_children[k]
        if(pose_child.userData.type=="agent"){
            pose_children.splice(k,1)
        }
    }
    return pose_children
}

function find_assets(room){
    let room_children = room.children
    for(let k in room_children){
        let room_child = room_children[k]
        if(room_child.userData.type=="agent"){
            room_children.splice(k,1)
        }
    }
    return room_children
}

function find_objects(asset_or_agent){
    return asset_or_agent.children
}

function find_agents(pose_or_room){
    let agents=[]
    for(let child of pose_or_room.children){
        if(child.userData.type=="agent"){
            agents.push(child)
        }
    }
    return agents
}

function create_links(node_a,node_b){
    let nodeName_a = node_a.text
    let nodeName_b = node_b.text 
    //为某两个节点之间添加links
    for(let relation of sg_json["links"]){
        let items = relation.split("↔")
        if (items.includes(nodeName_a) && items.includes(nodeName_b)) {
            return
        }
    }
    sg_json["links"].push(nodeName_a+"↔"+nodeName_b)
}

function create_links_for_poses(poses){
    // pose是网状结构
    // 寻找poses之间的连接关系，为pose之间添加links
    for(let pose of poses){
        let inLinks = pose.inLinks
        let outLinks = pose.outLinks
        for(let inlink of inLinks){
            if(inlink.begin.target.userData.type=="pose"){
                create_links(inlink.begin.target,pose)
            }
        }
        for(let outlink of outLinks){
            if(outlink.end.target.userData.type=="pose"){
                create_links(pose,outlink.end.target)
            }
        }
    }
}

function create_pose(node_pose){
    if(node_pose.text==""){
        throw new Error(`pose:${node_pose.id}的name为空`);
    }
    let pose={
        "id":node_pose.text
    }
    // 使用 Array.prototype.some() 来检查是否已存在相同 id 的对象
    if (!sg_json["nodes"]["pose"].some(item => item.id === pose.id)) {
        sg_json["nodes"]["pose"].push(pose);
    }
}

function create_room(node_room){
    if(node_room.text==""){
        throw new Error(`room:${node_room.id}的name为空`);
    }    
    let room={
        "id":node_room.text
    }
    // 使用 Array.prototype.some() 来检查是否已存在相同 id 的对象
    if (!sg_json["nodes"]["room"].some(item => item.id === room.id)) {
        sg_json["nodes"]["room"].push(room);
    }
}

function create_asset(node_asset){
    if(node_asset.text==""){
        throw new Error(`asset:${node_asset.id}的name为空`);
    }
    if(!(node_asset.userData.state&&node_asset.userData.state!="")){
        throw new Error(`asset:${node_asset.id}的state为空`);
    }
    if(!(node_asset.userData.affordances&&node_asset.userData.affordances.length!=0)){
        throw new Error(`asset:${node_asset.id}的affordances为空`);
    }

    let _state = node_asset.userData.state.split(',')

    let _affordances = node_asset.userData.affordances.split(',').flatMap(item => item.split('/')); //解析"turn_on/turn_off"为turn_on与turn_off

    let asset={
        "id":node_asset.text,
        "room":node_asset.parent.text,
        "state":_state,
        "affordances":_affordances
    }
    // 使用 Array.prototype.some() 来检查是否已存在相同 id 的对象
    if (!sg_json["nodes"]["asset"].some(item => item.id === asset.id)) {
        sg_json["nodes"]["asset"].push(asset);
    }
}

function create_object(node_object){
    if(node_object.text==""){
        throw new Error(`object:${node_object.id}的name为空`);
    }
    if(!(node_object.userData.state&&node_object.userData.state!="")){
        throw new Error(`object:${node_object.id}的state为空`);
    }
    if(!(node_object.userData.affordances&&node_object.userData.affordances.length!=0)){
        throw new Error(`object:${node_object.id}的affordances为空`);
    }

    let _affordances = node_object.userData.affordances.split(',').flatMap(item => item.split('/')); //解析"turn_on/turn_off"为turn_on与turn_off

    let object={
        "id":node_object.text,
        "state":`${node_object.userData.state}(${node_object.parent.text})`,
        "attributes":node_object.userData.attributes||"",
        "affordances":_affordances
    }
    // 使用 Array.prototype.some() 来检查是否已存在相同 id 的对象
    if (!sg_json["nodes"]["object"].some(item => item.id === object.id)) {
        sg_json["nodes"]["object"].push(object);
    }
}

function create_agent(node_agent){
    if(node_agent.text==""){
        throw new Error(`agent:${node_agent.id}的name为空`);
    }  
    let agent={
        "id":node_agent.text,
        "location":node_agent.parent.text
    }
    // 使用 Array.prototype.some() 来检查是否已存在相同 id 的对象
    if (!sg_json["nodes"]["agent"].some(item => item.id === agent.id)) {
        sg_json["nodes"]["agent"].push(agent);
    }
}

function check_for_duplicate_names(nodes){
    const nameSet = new Set();
    for (const node of nodes) {
        if (node && node.text =="" ) {
            throw new Error(`节点${node.id}的name为空`);
        }
        if (node && node.text !="" ) {
            if (nameSet.has(node.text)) {
                throw new Error(`重复的节点name:${node.text}`);
            }
            nameSet.add(node.text);
        }
    }
}