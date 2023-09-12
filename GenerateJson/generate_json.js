
export default function generate_json(editor_context){
    let root = find_root(editor_context.nodes)
    let poses = find_poses(root)
    console.log(poses)

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