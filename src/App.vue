<template>
    <!-- jtopo用于渲染的div -->
    <div class="main-content">
        <my-viewer :editorContext="editor_context" style="width: 700px;" />
        <div class="designer" id="divId" style=" width: 100%px; border: 1px solid gray"></div>
        <my-panel :nodeInfo="node_info" :editorContext="editor_context" style="width: 300px;"/>
    </div>
</template>

<script>
import { topoManager } from "./TopoManager";
import MyPanel from "../Panel/panel.vue";
import MyViewer from "../Panel/jsonviewer.vue"
// 可以绑定要绘制的数据，但别绑定jtopo对象
export default {
    name: "App",
    components: { MyPanel, MyViewer},
    mounted() {
        // 初始化
        this.editor = topoManager.init(document.getElementById("divId"));
        this.editor_context=this.editor
        console.log(this.editor)
            // 事件处理初始化
        function initEvent(editor,e) {
            const stage = editor.stage;
            const layer = editor.layer;

            const inputSystem = stage.inputSystem;

            inputSystem.on('click', () => {
                let xyInLayer = {
                    x: layer.mouseX,
                    y: layer.mouseY
                };
                // console.log('鼠标在layer中的坐标', xyInLayer); 

                let xyInCanvas = {
                    x: inputSystem.x,
                    y: inputSystem.y
                };
                // console.log('鼠标在画布的坐标', xyInCanvas); 
                let _userData = {
                            type:"",
                            state:"",
                            attributes:"",
                            affordances:""
                        }
                let target = inputSystem.pickedObject;
                if (target == null) {
                    e.node_info={
                        userData:{..._userData}
                    }
                    return;
                }
                if(target.className=="Link"){
                    console.log('点中了一个Link', target);
                    e.node_info={
                        userData:{..._userData}
                    }
                    return 
                }

                e.node_info=target
                console.log('点中了一个图元', target);
                console.log(editor)
            });
        }
        initEvent(this.editor,this)
    },
    data () {
      return {
        node_info: {},
        editor_context:{}
      }
    },
    methods: {
        search_node(node_id){
            for(let node of this.editor.nodes){
                if(node.id == node_id){
                    return node
                }
            }
            return ""
        },
    }
};
</script>
