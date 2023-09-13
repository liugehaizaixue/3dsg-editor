import {
    Stage,
    Layer,
    Node,
    Link,
    randomColor,
    CircleNode,
    Shape,
    Color,
    PopupMenu
} from '../jtopo_npm/core/index';
// import {
//     Editor, IconsPanel,
//     PropertiesPanel,
// } from '../jtopo_npm/editor/index';
import { dataService } from './DataService';

/**
 * 只关心绘制
 * 
 * 不关心数据加载和处理
 * 
 * 依赖一个div对象
 */
class TopoManager {
    stage;
    layer;

    /**
     * 初始化，创建一个空画布
     * @param {*} divObj 
     */
    init(divObj) {
        const stage = new Stage(divObj);
        const layer = new Layer('default');
        stage.styleSystem.setTheme('DefaultDark');
        // layer.showAxis();
        stage.addChild(layer);


        stage.styleSystem.defClass('.ball', {
            textPosition: 'center',
            textBaseline: 'middle',
            strokeStyle: 'rgba(0,0,0,0.3)',
            font: '8px arial',
        });
        // 鼠标点中的对象在右侧显示属性面板
        stage.inputSystem.on('mousedown', function (e) {
            const pickedObject = stage.inputSystem.pickedObject;
            window.target = pickedObject;
            if (pickedObject) {
                console.log(e)
            }
        });
        stage.show();

        this.stage = stage;
        this.layer = layer;
        let nodes = [];
        this.nodes = nodes;
        const rootNode = this.addroot();
        this.rootNode = rootNode;
        rootNode.setXY(0, 0);
        this.gen(rootNode);
        // this.initEvent();

        this.initbg()
        //=================================
        // 加载数据并绘制
        let data = dataService.loadData();
        // this.render(data);
        return this
    }

    addLink(nodeA, nodeZ) {
        const stage = this.stage;
        const layer = this.layer;
        var link = new Link('', nodeA, nodeZ, 'nearest', 'nearest');
        link.css({
            lineWidth: 1,
            strokeStyle: 'black',
        });

        // 末尾箭头-大小(15,15)
        let arrowNode = new Node(null, 0, 0, 8, 8);

        // 形状- 三角形P
        arrowNode.setShape(Shape.ArrowShape, false);

        arrowNode.css({
            lineCap: 'round',
            lineWidth: 2,
            strokeStyle: link.style.strokeStyle,
        });
        arrowNode.draggable = false;
        link.setEndArrow(arrowNode);

        layer.addChild(link);
        return link;
    }
    addLinkNoArrow(nodeA, nodeZ) {
        const stage = this.stage;
        const layer = this.layer;
        var link = new Link('', nodeA, nodeZ, 'nearest', 'nearest');
        link.css({
            lineWidth: 1,
            strokeStyle: 'black',
        });
        layer.addChild(link);
        return link;
    }
    addroot() {
        const stage = this.stage;
        const layer = this.layer;
        let nodes = this.nodes;

        var node = new CircleNode("root", 0, 0);
        // node.text = node.id;
        node.setRadius(8);
        node.addClass('.ball');
        // node.style.fillStyle = randomColor();

        node.style.fillStyle = "#B9B4AF"

        node.userData = {
            type: "root",
        }
        node.draggable = false;

        layer.addChild(node);
        nodes.push(node);

        return node;
    }
    addpose(text, type = "pose", x = Math.random() * 150 - Math.random() * 150, y = Math.random() * 150 - Math.random() * 150) {
        const rootNode = this.rootNode;
        let nodes = this.nodes;
        var node = new CircleNode(text, x, y);
        console.log(node.id)
        node.text = text+node.id;
        node.setRadius(8);
        node.addClass('.ball');
        // node.style.fillStyle = randomColor();

        node.style.fillStyle = "#9678DD"

        node.userData = {
            type: type,
        }

        rootNode.addChild(node);
        nodes.push(node);
        node = this.addPopupMenuForPose(node)
        console.log(node)
        return node;
    }
    addroom(text, parentNode,type = "room", x = Math.random() * 150 - Math.random() * 150, y = Math.random() * 150 - Math.random() * 150) {
        const stage = this.stage;
        const layer = this.layer;
        let nodes = this.nodes;

        var node = new CircleNode(text, x, y);
        node.text = text+node.id;
        node.setRadius(8);
        node.addClass('.ball');
        // node.style.fillStyle = randomColor();

        node.style.fillStyle = "#80D360"

        node.userData = {
            type: type,
        }

        parentNode.addChild(node);
        nodes.push(node);

        node = this.addPopupMenuForRoom(node)
        return node;
    }
    addasset(text, parentNode,type = "asset", x = Math.random() * 150 - Math.random() * 150, y = Math.random() * 150 - Math.random() * 150) {
        const stage = this.stage;
        const layer = this.layer;
        let nodes = this.nodes;

        var node = new CircleNode(text, x, y);
        node.text = text+node.id;
        node.setRadius(8);
        node.addClass('.ball');
        // node.style.fillStyle = randomColor();

        node.style.fillStyle = "#468EEA"

        node.userData = {
            type: type,
        }

        parentNode.addChild(node);
        nodes.push(node);

        node = this.addPopupMenuForAsset(node)
        return node;
    }
    addobject(text, parentNode,type = "object", x = Math.random() * 150 - Math.random() * 150, y = Math.random() * 150 - Math.random() * 150) {
        const stage = this.stage;
        const layer = this.layer;
        let nodes = this.nodes;

        var node = new CircleNode(text, x, y);
        node.text = text+node.id;
        node.setRadius(8);
        node.addClass('.ball');
        // node.style.fillStyle = randomColor();

        node.style.fillStyle = "#E8C764"

        node.userData = {
            type: type,
        }

        parentNode.addChild(node);
        nodes.push(node);
        node = this.addPopupMenuForObject(node)
        return node;
    }
    addagent(text, parentNode,type = "agent", x = Math.random() * 150 - Math.random() * 150, y = Math.random() * 150 - Math.random() * 150) {
        const stage = this.stage;
        const layer = this.layer;
        let nodes = this.nodes;

        var node = new Node(text, x, y);
        node.text = text+node.id;
        node.resizeTo(30, 12)
        node.addClass('.ball');

        node.style.fillStyle = "#E46B4A"

        node.userData = {
            type: type,
        }

        parentNode.addChild(node);
        nodes.push(node);

        node=this.addPopupMenuForAgent(node)
        return node;
    }
    gen(parentNode) {
        let node = this.addpose("pose");
        this.addLinkNoArrow(parentNode, node);
    }
    initbg() {
        let url =
            './src/assets/bg.jpg';
        this.getbg(url).then(size => {
            console.log(`Width: ${size.width}, Height: ${size.height}`);
            var imgNode = new Node('background', 0, 0, size.width, size.height);
            // png、jpg、jpeg 、bmp、svg、gif... 或者一个cavnas
            imgNode.setImage(url);
            imgNode.css({
                backgroundSize: '100% 100%',
            });
            imgNode.draggable = false;
            imgNode.zIndex = -1;
            imgNode.connectable = false;  // 不允许连线
            imgNode.mouseEnabled = false; // 不响应鼠标
            this.layer.addChild(imgNode)
        })
    }
    async getbg(url) {

        function getImageSize(url) {
            return new Promise(function (resolve, reject) {
                let image = new Image();
                image.onload = function () {
                    resolve({
                        width: image.width,
                        height: image.height
                    });
                };
                image.onerror = function () {
                    reject(new Error('error'));
                };
                image.src = url;
            });
        }

        try {
            let size = await getImageSize(url);
            return size;
        } catch (error) {
            console.error(error);
            throw error;
        }
    }
    resetNodes(){
        let nodes = []
        for(let node of this.layer.children){
            if(node.userData&&node.userData.type=="root"){
                this.rootNode=node
                nodes.push(node)
                this.findChildren(node,nodes)
            }
        }
        this.nodes=nodes
    }
    findChildren(node,nodes){
        if(node.children.length!=0){
            for(let child of node.children){
                nodes.push(child)
                this.findChildren(child,nodes)
            }
        }else{
            return nodes
        }
    }
    addPopupMenu(){
        for(let node of this.nodes){
            if(node.userData.type=="object"){
                this.addPopupMenuForObject(node)
            }
            else if(node.userData.type=="asset"){
                this.addPopupMenuForAsset(node)
            }
            else if(node.userData.type=="agent"){
                this.addPopupMenuForAgent(node)
            }
            else if(node.userData.type=="room"){
                this.addPopupMenuForRoom(node)
            }
            else if(node.userData.type=="pose"){
                this.addPopupMenuForPose(node)
            }
        }
    }
    addPopupMenuForObject(node){
        // 右键菜单
        var popupMenu = new PopupMenu(this.stage);
        popupMenu.setHtml(`
            <div class="header">编辑</div>
            <a>删除</a> 
            <hr></hr>
        `);

        // 菜单选择事件处理
        const that = this;
        popupMenu.on('select', function (event) {
            //event.item： 选中的菜单文本
            var item = event.item;
            if(item == "删除"){
                // 先从TopoManager中nodes中删除
                for(let k in that.nodes){
                    if(that.nodes[k].id==node.id){
                        that.nodes.splice(k, 1);
                    }
                }
                if (node.outLinks.length != 0) {
                    console.log("先删除子节点")
                    return
                }
                for (var key in node.inLinks) {
                    let link = node.inLinks[key]
                    for (var outkey in link.begin.target.outLinks) {
                        let outlink = link.begin.target.outLinks[outkey]
                        if (outlink.id == link.id) {
                            link.begin.target.removeOutLink(outlink);
                        }
                    }
                    link.removeFromParent();
                }
                node.removeFromParent();
            }
        });

        // 鼠标按下时隐藏
        this.stage.inputSystem.on('mousedown', function () {
            popupMenu.hide();
        });
        // 右键松开时显示
        node.on('mouseup', function () {
            let is = that.stage.inputSystem;
            // 取画布上的坐标x,y
            if (is.button == 2) { // right button
                popupMenu.showAt(is.x, is.y);
            }
        });
        return node
    }
    addPopupMenuForAsset(node){
        // 右键菜单
        var popupMenu = new PopupMenu(this.stage);
        popupMenu.setHtml(`
            <div class="header">编辑</div>
            <a>添加object</a>  
            <a>删除</a> 
            <hr></hr>
        `);

        // 菜单选择事件处理
        const that = this;
        popupMenu.on('select', function (event) {
            //event.item： 选中的菜单文本
            var item = event.item;
            if(item == "添加object"){
                let new_object = that.addobject("object",node)
                that.addLinkNoArrow(node, new_object );
            }else if(item == "删除"){
                // 先从TopoManager中nodes中删除
                for(let k in that.nodes){
                    if(that.nodes[k].id==node.id){
                        that.nodes.splice(k, 1);
                    }
                }
                if (node.outLinks.length != 0) {
                    console.log("先删除子节点")
                    return
                }
                for (var key in node.inLinks) {
                    let link = node.inLinks[key]
                    for (var outkey in link.begin.target.outLinks) {
                        let outlink = link.begin.target.outLinks[outkey]
                        if (outlink.id == link.id) {
                            link.begin.target.removeOutLink(outlink);
                        }
                    }
                    link.removeFromParent();
                }
                node.removeFromParent();
            }
        });

        // 鼠标按下时隐藏
        this.stage.inputSystem.on('mousedown', function () {
            popupMenu.hide();
        });
        // 右键松开时显示
        node.on('mouseup', function () {
            let is = that.stage.inputSystem;
            // 取画布上的坐标x,y
            if (is.button == 2) { // right button
                popupMenu.showAt(is.x, is.y);
            }
        });
        return node
    }
    addPopupMenuForAgent(node){
        // 右键菜单
        var popupMenu = new PopupMenu(this.stage);
        popupMenu.setHtml(`
            <div class="header">编辑</div>
            <a>添加object</a> 
            <a>删除</a> 
            <hr></hr>
        `);

        // 菜单选择事件处理
        const that = this;
        popupMenu.on('select', function (event) {
            //event.item： 选中的菜单文本
            var item = event.item;
            if(item == "添加object"){
                let new_object = that.addobject("object",node)
                that.addLinkNoArrow(node, new_object );
            }
            else if(item == "删除"){
                // 先从TopoManager中nodes中删除
                for(let k in that.nodes){
                    if(that.nodes[k].id==node.id){
                        that.nodes.splice(k, 1);
                    }
                }
                if (node.outLinks.length != 0) {
                    console.log("先删除子节点")
                    return
                }
                for (var key in node.inLinks) {
                    let link = node.inLinks[key]
                    for (var outkey in link.begin.target.outLinks) {
                        let outlink = link.begin.target.outLinks[outkey]
                        if (outlink.id == link.id) {
                            link.begin.target.removeOutLink(outlink);
                        }
                    }
                    link.removeFromParent();
                }
                node.removeFromParent();
            }
        });

        // 鼠标按下时隐藏
        this.stage.inputSystem.on('mousedown', function () {
            popupMenu.hide();
        });
        // 右键松开时显示
        node.on('mouseup', function () {
            let is = that.stage.inputSystem;
            // 取画布上的坐标x,y
            if (is.button == 2) { // right button
                popupMenu.showAt(is.x, is.y);
            }
        });
        return node
    }
    addPopupMenuForRoom(node){
        // 右键菜单
        var popupMenu = new PopupMenu(this.stage);
        popupMenu.setHtml(`
            <div class="header">编辑</div>
            <a>添加asset</a> 
            <a>添加agent</a> 
            <a>删除</a> 
            <hr></hr>
        `);

        // 菜单选择事件处理
        const that = this;
        popupMenu.on('select', function (event) {
            //event.item： 选中的菜单文本
            var item = event.item;
            if(item == "添加asset"){
                let new_asset = that.addasset("asset",node)
                that.addLinkNoArrow(node, new_asset );
            }
            else if(item=="添加agent"){
                let new_agent = that.addagent("agent",node)
                that.addLinkNoArrow(node, new_agent );
            }
            else if(item == "删除"){
                // 先从TopoManager中nodes中删除
                for(let k in that.nodes){
                    if(that.nodes[k].id==node.id){
                        that.nodes.splice(k, 1);
                    }
                }
                if (node.outLinks.length != 0) {
                    console.log("先删除子节点")
                    return
                }
                for (var key in node.inLinks) {
                    let link = node.inLinks[key]
                    for (var outkey in link.begin.target.outLinks) {
                        let outlink = link.begin.target.outLinks[outkey]
                        if (outlink.id == link.id) {
                            link.begin.target.removeOutLink(outlink);
                        }
                    }
                    link.removeFromParent();
                }
                node.removeFromParent();
            }
        });

        // 鼠标按下时隐藏
        this.stage.inputSystem.on('mousedown', function () {
            popupMenu.hide();
        });
        // 右键松开时显示
        node.on('mouseup', function () {
            let is = that.stage.inputSystem;
            // 取画布上的坐标x,y
            if (is.button == 2) { // right button
                popupMenu.showAt(is.x, is.y);
            }
        });
        return node
    }
    addPopupMenuForPose(node){
        console.log("addPopupMenuForPose")
        // 右键菜单
        var popupMenu = new PopupMenu(this.stage);
        popupMenu.setHtml(`
            <div class="header">编辑</div>
            <a>添加pose</a> 
            <a>添加room</a> 
            <a>添加agent</a> 
            <a>删除</a> 
            <hr></hr>
        `);

        // 菜单选择事件处理
        const that = this;
        popupMenu.on('select', function (event) {
            //event.item： 选中的菜单文本
            var item = event.item;
            if (item == "添加pose") {
                let new_pose = that.addpose("pose")
                that.addLinkNoArrow(node, new_pose);
            }else if(item == "添加room"){
                let new_room = that.addroom("room",node)
                that.addLinkNoArrow(node, new_room );
            }
            else if(item=="添加agent"){
                let new_agent = that.addagent("agent",node)
                that.addLinkNoArrow(node, new_agent );
            }
            else if(item == "删除"){
                // 先从TopoManager中nodes中删除
                for(let k in that.nodes){
                    if(that.nodes[k].id==node.id){
                        that.nodes.splice(k, 1);
                    }
                }
                if (node.outLinks.length != 0) {
                    console.log("先删除子节点")
                    return
                }
                for (var key in node.inLinks) {
                    let link = node.inLinks[key]
                    for (var outkey in link.begin.target.outLinks) {
                        let outlink = link.begin.target.outLinks[outkey]
                        if (outlink.id == link.id) {
                            link.begin.target.removeOutLink(outlink);
                        }
                    }
                    link.removeFromParent();
                }
                node.removeFromParent();
            }
        });

        // 鼠标按下时隐藏
        this.stage.inputSystem.on('mousedown', function () {
            popupMenu.hide();
        });
        // 右键松开时显示
        node.on('mouseup', function () {
            let is = that.stage.inputSystem;
            // 取画布上的坐标x,y
            if (is.button == 2) { // right button
                popupMenu.showAt(is.x, is.y);
            }
        });
        return node
    }
}

export const topoManager = new TopoManager();