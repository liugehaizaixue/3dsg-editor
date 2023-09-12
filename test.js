
/*
jtopo提供了编辑器的基础功能，该demo主要演示核心功能。

UI部分需要根据项目需求做扩展和定制。

快捷键：(仅当鼠标在画布上时有效)
    1. ctrl+c/v/x 、delete    ：复制 、粘贴、剪切、删除
    2. ctrl+z 、ctrl+shift+z  ：撤销、重做
    3. ctrl+a             : 全选
    4. ctrl+i             : 反向全选
    5. ctrl+s             : 临时保存浏览器缓存（关闭后仍然存在）
    6. ctrl+o             : 加载最后一次的临时保存内容 
    7. 方向键：            : 微调所有选中节点的坐标
    8. h                 : 隐藏/显示 右侧属性栏
  
鼠标：
    1. 左键：选择节点 或 框选多个 (按住ctrl增加选中或者剔除选中)
    2. 右键：拖拽画布
    3. 滚轮：缩放
    4. 按住Shift再拖拽，可以把节点放到另一个节点内(建立父/子关系)
    5. 按住Ctrl，可以画线到连线上任意位置 和 节点边框任意位置

保存打开本地:
    1. 工具栏最右侧两个按钮

操作系统：
    MacOS系统下: 把ctrl换成cmd
    1. cmd + backspace  : 和delete一样是删除

UI定制扩展：
    左侧图标栏 和 右侧属性修改栏 耦合极低，可以替换成自定义的。
*/
import {
    Stage,
    Layer,
    Node,
    Link,
    LinkHelper,
    Shape
} from '@jtopo/core';

import {
    Editor, IconsPanel,
    PropertiesPanel,
} from '@jtopo/editor';

let stage = new Stage('divId');
let layer = new Layer();
stage.addChild(layer);

layer.showAxis();
stage.show();

let editor = new Editor(stage);
stage.setMode('edit');

// 方便调试
window.editor = editor;
window.stage = stage;
window.layer = layer;

// 左侧图元面板配置
const leftPanelConfig = {
    items: [
        {
            name: '矩形',
            className: 'Node',
            iconHtml: `
                <svg width="100%" height="100%">
                <rect width="30" height="22" x="6" y = "9"
                stroke="black" stroke-width="1" fill="white"/>
                </svg>
            `,
            properties: {
                width: 100,
                height: 50,
                text: '文字',
                css: {
                    lineWidth: 1,
                    border: '1px gray',
                    strokeStyle: '#e1e1e1',
                    padding: 5,
                    borderRadius: 5,
                    font: 'normal 12px 微软雅黑',
                    textAlign: 'center',
                    textBaseline: 'middle',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                }
            }
        },
        {
            name: '直线',
            className: 'Link',
            iconHtml: `
            <svg width="100%" height="100%">
            <line x1="5" y1="21" x2="35" y2="21" stroke="black" stroke-width="1"/>
            </svg>`,
            properties: {
                text: '直线',
                css: {
                    'lineWidth': 2,
                }
            }
        },
        {
            name: '折线',
            className: 'AutoFoldLink',
            iconHtml: `
            <svg width="100%" height="100%">
            <line x1="5" y1="10" x2="30" y2="10" stroke="black" stroke-width="1"/>
            <line x1="30" y1="10" x2="30" y2="35" stroke="black" stroke-width="1"/>
            </svg>`,
            properties: {
                text: '折线',
                css: {
                    'lineWidth': 2,
                }
            }
        },


        {
            name: '圆形',
            className: 'CircleNode',
            iconHtml: `
            <svg width="100%" height="100%">
            <circle cx="20" cy="20" r="15" 
                stroke="black" stroke-width="1" fill="white"/>
            </svg>
        `,
            properties: {
                text: '圆形',
                radius: 32,
                css: {
                    lineWidth: 1,
                    strokeStyle: 'gray',
                }
            }
        },
        {
            name: '多边形',
            className: 'Node',
            iconHtml: `
        <svg width="100%" height="100%">
        <polygon points="21,5, 36,21, 21,36, 5,21"
        stroke="black" stroke-width="1" fill="white"/>
        </svg>
        `,
            properties: {
                text: '多边形',
                css: {
                    lineWidth: 1,
                    strokeStyle: '#d1d1d1',
                    font: 'normal 16px 微软雅黑',
                    textAlign: 'center',
                    textBaseline: 'middle',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                }
            }
        },
        {
            name: '文字',
            className: 'TextNode',
            iconHtml: `
            <div width="100%" height="100%" style="font-size:12px;padding-left:7px;padding-top:10px;font-weight:bold;">
                文字
            </div>
        `,
            properties: {
                text: '文本文字',
                width: 100,
                height: 50,
                autoSize: false,
                autoDirection: false,
                css: {
                    'font': 'bold 12px arial',
                    border: '0px',
                    textAlign: 'center',
                    textBaseline: 'middle',
                    color: 'gray',
                    backgroundColor: 'rgba(255,255,255,0.01)',
                }
            }
        },
        {
            name: '终端',
            className: 'Node',
            iconHtml: `
            <img width="100%" style="padding:2px;" src="./assets/img/pstn/terminal.png"/>
         `,
            properties: {
                text: '终端',
                image: './assets/img/pstn/terminal.png',
                sizeToImage: true,
            }
        }
    ]
};


// 创建左侧的图标面板，并设置图标数据
let iconPanel = new IconsPanel(stage);
iconPanel.setConfig(leftPanelConfig).show();

// 右侧属性编辑面板
let datGui = dat; //dat第三方库: dat.GUI.js
let propertiesPanel = new PropertiesPanel(editor, datGui);

// 画布接收到拖拽结束事件时
editor.on('drop', function () {
    let e = stage.inputSystem.event;
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file) {
        let type = file.type;
        if (type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function (e) {
                let textContent = e.target.result;
                console.log(textContent);
                let node = new Node();
                node.setImage(textContent, true);
                layer.addChild(node);
            };
            reader.readAsDataURL(file);
            return;
        }
    }

    // 获取左侧面板拖拽’项‘对应的配置
    const configItem = iconPanel.getDragItem();

    // 根据配置的类名称创建实例
    const instance = editor.create(configItem.className);

    // 根据配置的属性初始化实例
    const properties = configItem.properties;
    setProperties(instance, properties);

    if (instance instanceof Node) {
        instance.text = '节点';
    } else {
        instance.text = '连线-' + instance.id;
        // 结束箭头
        let endArrow = new Node();
        endArrow.resizeTo(12, 12);
        endArrow.setShape(Shape.Arrow); // 箭头
        endArrow.css({
            strokeStyle: 'gray',
            lineWidth: 1 
        });
        endArrow.connectable = false;  // 不允许连线
        endArrow.mouseEnabled = false; // 不响应鼠标
        instance.text = '线' + instance.id;
        instance.setEndArrow(endArrow);
    }

    if (configItem.name == '多边形') {
        instance.setShape(Shape.polygon(6));
    }

    // 在右侧显示属性面板
    propertiesPanel.showProperty(instance);
});

function setProperties(obj, properties) {
    if (properties != null) {
        let keys = Object.keys(properties);

        keys.forEach(function (key) {
            let value = properties[key];
            if (key == 'css') {
                obj.css(value);
            } else if (key == 'image') {
                obj.setImage(value, properties['sizeToImage']);
            } else {
                obj[key] = value;
            }
        });
    }
}

// 鼠标点中的对象在右侧显示属性面板
stage.inputSystem.on('mousedown', function (e) {
    const pickedObject = stage.inputSystem.pickedObject;
    window.target = pickedObject;
    if (pickedObject) {
        propertiesPanel.showProperty(pickedObject);
    }
});

// 当鼠标画出的线类型
editor.LinkClassName = 'AutoFoldLink';

// 当鼠标画出线时
editor.onLinkCreate = function (link) {
    let endArrow = new Node();
    endArrow.resizeTo(12, 12);
    endArrow.setShape(Shape.Damond);  // 菱形
    endArrow.css({ fillStyle: 'green' });
    endArrow.connectable = false;  // 不允许连线
    endArrow.mouseEnabled = false; // 不响应鼠标

    // 自定义画出来的连线
    link.setEndArrow(endArrow);
}



// 去掉自带的编辑器右键菜单
// editor.popupMenu.remove();

