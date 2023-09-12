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

    // // 事件处理初始化
    // initEvent() {
    //     const stage = this.stage;
    //     const layer = this.layer;

    //     const inputSystem = stage.inputSystem;

    //     inputSystem.on('click', () => {
    //         let xyInLayer = {
    //             x: layer.mouseX,
    //             y: layer.mouseY
    //         };
    //         // console.log('鼠标在layer中的坐标', xyInLayer); 

    //         let xyInCanvas = {
    //             x: inputSystem.x,
    //             y: inputSystem.y
    //         };
    //         // console.log('鼠标在画布的坐标', xyInCanvas); 

    //         let target = inputSystem.pickedObject;
    //         if (target == null) {
    //             return;
    //         }
    //         console.log('点中了一个图元', target);
    //     });
    // }
    // addNode(text, type = "room", x = Math.random() * 150 - Math.random() * 150, y = Math.random() * 150 - Math.random() * 150) {
    //     const stage = this.stage;
    //     const layer = this.layer;
    //     let nodes = this.nodes;


    //     var node = new CircleNode(text, x, y);
    //     // node.text = node.id;
    //     node.setRadius(8);
    //     node.addClass('.ball');
    //     // node.style.fillStyle = randomColor();
    //     if (type == "room") {
    //         node.style.fillStyle = "#80D360"
    //     } else if (type == "pose") {
    //         node.style.fillStyle = "#9678DD"
    //     } else if (type == "asset") {
    //         node.style.fillStyle = "#468EEA"
    //     } else if (type == "object") {
    //         node.style.fillStyle = "#E8C764"
    //     } else if (type == "agent") {
    //         node.style.fillStyle = "#E46B4A"
    //     } else if (type == "root") {
    //         node.style.fillStyle = "#E46B4A"
    //     }

    //     node.userData = {
    //         type: type,
    //     }
    //     if (type == "root") {
    //         node.draggable = false;
    //     }
    //     layer.addChild(node);
    //     nodes.push(node);

    //     // 右键菜单
    //     var popupMenu = new PopupMenu(this.stage);
    //     popupMenu.setHtml(`
    //         <div class="header">编辑</div>
    //         <a>删除</a> 
    //         <hr></hr>
    //     `);

    //     // 菜单选择事件处理
    //     popupMenu.on('select', function (event) {
    //         //event.item： 选中的菜单文本
    //         var item = event.item;
    //         if (item == "删除") {
    //             if (node.outLinks.length != 0) {
    //                 console.log("先删除子节点")
    //                 return
    //             }
    //             for (var key in node.inLinks) {
    //                 let link = node.inLinks[key]
    //                 console.log(link.id)
    //                 for (var outkey in link.begin.target.outLinks) {
    //                     let outlink = link.begin.target.outLinks[outkey]
    //                     if (outlink.id == link.id) {
    //                         link.begin.target.removeOutLink(outlink);
    //                     }
    //                 }
    //                 link.removeFromParent();
    //             }
    //             node.removeFromParent();
    //         }
    //     });

    //     // 鼠标按下时隐藏
    //     this.stage.inputSystem.on('mousedown', function () {
    //         popupMenu.hide();
    //     });
    //     this.popupMenu = popupMenu;
    //     // 右键松开时显示
    //     node.on('mouseup', function () {
    //         let is = stage.inputSystem;
    //         // 取画布上的坐标x,y
    //         if (is.button == 2) { // right button
    //             popupMenu.showAt(is.x, is.y);
    //         }
    //     });
    //     return node;
    // }
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

        node.style.fillStyle = "#E46B4A"

        node.userData = {
            type: "root",
        }
        node.draggable = false;

        layer.addChild(node);
        nodes.push(node);

        // // 右键菜单
        // var popupMenu = new PopupMenu(this.stage);
        // popupMenu.setHtml(`
        //     <div class="header">编辑</div>
        //     <a>添加pose</a> 
        //     <hr></hr>
        // `);

        // // 菜单选择事件处理
        // popupMenu.on('select', function (event) {
        //     //event.item： 选中的菜单文本
        //     var item = event.item;
        //     if (item == "添加pose") {

        //     }
        // });

        // // 鼠标按下时隐藏
        // this.stage.inputSystem.on('mousedown', function () {
        //     popupMenu.hide();
        // });
        // this.popupMenu = popupMenu;
        // // 右键松开时显示
        // node.on('mouseup', function () {
        //     let is = stage.inputSystem;
        //     // 取画布上的坐标x,y
        //     if (is.button == 2) { // right button
        //         popupMenu.showAt(is.x, is.y);
        //     }
        // });
        return node;
    }
    addpose(text, type = "pose", x = Math.random() * 150 - Math.random() * 150, y = Math.random() * 150 - Math.random() * 150) {
        const stage = this.stage;
        const layer = this.layer;
        const rootNode = this.rootNode;
        let nodes = this.nodes;

        var node = new CircleNode(text, x, y);
        // node.text = node.id;
        node.setRadius(8);
        node.addClass('.ball');
        // node.style.fillStyle = randomColor();

        node.style.fillStyle = "#9678DD"

        node.userData = {
            type: type,
        }

        rootNode.addChild(node);
        nodes.push(node);

        // 右键菜单
        var popupMenu = new PopupMenu(this.stage);
        popupMenu.setHtml(`
            <div class="header">编辑</div>
            <a>添加pose</a> 
            <a>添加room</a> 
            <a>删除</a> 
            <hr></hr>
        `);

        // 菜单选择事件处理
        const that = this;
        popupMenu.on('select', function (event) {
            //event.item： 选中的菜单文本
            var item = event.item;
            if (item == "添加pose") {
                let new_pose = that.addpose("pose_test")
                that.addLinkNoArrow(node, new_pose);
            }else if(item == "添加room"){
                let new_room = that.addroom("pose_test",node)
                that.addLink(node, new_room );
            }
            else if(item == "删除"){
                if (node.outLinks.length != 0) {
                    console.log("先删除子节点")
                    return
                }
                for (var key in node.inLinks) {
                    let link = node.inLinks[key]
                    console.log(link.id)
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
        this.popupMenu = popupMenu;
        // 右键松开时显示
        node.on('mouseup', function () {
            let is = stage.inputSystem;
            // 取画布上的坐标x,y
            if (is.button == 2) { // right button
                popupMenu.showAt(is.x, is.y);
            }
        });
        return node;
    }
    addroom(text, parentNode,type = "room", x = Math.random() * 150 - Math.random() * 150, y = Math.random() * 150 - Math.random() * 150) {
        const stage = this.stage;
        const layer = this.layer;
        let nodes = this.nodes;

        var node = new CircleNode(text, x, y);
        // node.text = node.id;
        node.setRadius(8);
        node.addClass('.ball');
        // node.style.fillStyle = randomColor();

        node.style.fillStyle = "#80D360"

        node.userData = {
            type: type,
        }

        parentNode.addChild(node);
        nodes.push(node);

        // 右键菜单
        var popupMenu = new PopupMenu(this.stage);
        popupMenu.setHtml(`
            <div class="header">编辑</div>
            <a>添加object</a> 
            <a>添加asset</a> 
            <a>删除</a> 
            <hr></hr>
        `);

        // 菜单选择事件处理
        const that = this;
        popupMenu.on('select', function (event) {
            //event.item： 选中的菜单文本
            var item = event.item;
            if(item == "添加asset"){
                let new_asset = that.addasset("asset_test",node)
                that.addLink(node, new_asset );
            }
            else if(item == "添加object"){
                let new_object = that.addobject("object_test",node)
                that.addLink(node, new_object );
            }else if(item == "删除"){
                if (node.outLinks.length != 0) {
                    console.log("先删除子节点")
                    return
                }
                for (var key in node.inLinks) {
                    let link = node.inLinks[key]
                    console.log(link.id)
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
        this.popupMenu = popupMenu;
        // 右键松开时显示
        node.on('mouseup', function () {
            let is = stage.inputSystem;
            // 取画布上的坐标x,y
            if (is.button == 2) { // right button
                popupMenu.showAt(is.x, is.y);
            }
        });
        return node;
    }
    addasset(text, parentNode,type = "asset", x = Math.random() * 150 - Math.random() * 150, y = Math.random() * 150 - Math.random() * 150) {
        const stage = this.stage;
        const layer = this.layer;
        let nodes = this.nodes;

        var node = new CircleNode(text, x, y);
        // node.text = node.id;
        node.setRadius(8);
        node.addClass('.ball');
        // node.style.fillStyle = randomColor();

        node.style.fillStyle = "#468EEA"

        node.userData = {
            type: type,
        }

        parentNode.addChild(node);
        nodes.push(node);

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
                let new_object = that.addobject("object_test",node)
                that.addLink(node, new_object );
            }else if(item == "删除"){
                if (node.outLinks.length != 0) {
                    console.log("先删除子节点")
                    return
                }
                for (var key in node.inLinks) {
                    let link = node.inLinks[key]
                    console.log(link.id)
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
        this.popupMenu = popupMenu;
        // 右键松开时显示
        node.on('mouseup', function () {
            let is = stage.inputSystem;
            // 取画布上的坐标x,y
            if (is.button == 2) { // right button
                popupMenu.showAt(is.x, is.y);
            }
        });
        return node;
    }
    addobject(text, parentNode,type = "object", x = Math.random() * 150 - Math.random() * 150, y = Math.random() * 150 - Math.random() * 150) {
        const stage = this.stage;
        const layer = this.layer;
        let nodes = this.nodes;

        var node = new CircleNode(text, x, y);
        // node.text = node.id;
        node.setRadius(8);
        node.addClass('.ball');
        // node.style.fillStyle = randomColor();

        node.style.fillStyle = "#E8C764"

        node.userData = {
            type: type,
        }

        parentNode.addChild(node);
        nodes.push(node);

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
                if (node.outLinks.length != 0) {
                    console.log("先删除子节点")
                    return
                }
                for (var key in node.inLinks) {
                    let link = node.inLinks[key]
                    console.log(link.id)
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
        this.popupMenu = popupMenu;
        // 右键松开时显示
        node.on('mouseup', function () {
            let is = stage.inputSystem;
            // 取画布上的坐标x,y
            if (is.button == 2) { // right button
                popupMenu.showAt(is.x, is.y);
            }
        });
        return node;
    }
    gen(parentNode) {
        let node = this.addpose("pose1", "pose");
        this.addLinkNoArrow(parentNode, node);
    }
    initbg() {
        let url =
            './src/assets/bg.jpg';
        this.getbg(url).then(size => {
            console.log(`Width: ${size.width}, Height: ${size.height}`);
            var imgNode = new Node('Image or SVG', 0, 0, size.width, size.height);
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
    test(){
        console.log("hello topo")
    }
    /**
     * 根据传入的业务数据制图
     * @param {*} data 业务数据
     */
    // render(data){
    //     const stage = this.stage;
    //     const layer = this.layer;

    //     //TODO: 根据data 来绘制
    //     const fromNode = new Node('From', -100, 0, 40, 40);
    //     const toNode   = new Node('To',   100, 0, 40, 40);

    //     // 设置节点填充颜色
    //     fromNode.css({
    //         fillStyle: 'orange',
    //         font: 'bold 12px arial',
    //     });

    //     toNode.css({
    //         fillStyle: 'blue',
    //     });

    //     const link = new Link('Link',fromNode,toNode);

    //     layer.addChilds([fromNode, toNode, link]);

    //     fromNode.on('mousedown', ()=>{
    //         fromNode.text = 'mousedown';
    //     });
    // }
}

export const topoManager = new TopoManager();