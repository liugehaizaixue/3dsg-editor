let original_sg_json={
    "nodes":{
        "room":[],
        "pose":[],
        "agent":[],
        "asset":[],
        "object":{}
    },
    "links":[]
}
let sg_json = JSON.parse(JSON.stringify(original_sg_json));


export default function generate_json(editor_context){
    init_generator()
    let root = find_root(editor_context.nodes)
    let poses = find_poses(root)
    console.log(poses)
    create_links("pose1","bobs_room")
    console.log(sg_json)
    console.log(original_sg_json)

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

function find_room(pose){
    return root.children
}

function find_asset(room){
    return root.children
}

function find_object(asset){
    return root.children
}

function create_links(nodeName_a,nodeName_b){
    for(let relation of sg_json["links"]){
        let items = relation.split("↔")
        if (items.includes(nodeName_a) && items.includes(nodeName_b)) {
            return
        }
    }
    sg_json["links"].push(nodeName_a+"↔"+nodeName_b)
}