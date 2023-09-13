<template>
    <div class="my-viewer" ref="viewer">
        <el-card class="box-card" style="height: 100%;">
            <el-button type="primary" round @click="generateJson">Generate Json</el-button>
            <div class="preview-model" >
                <highlightjs :code="codeString" :language="codeLanguage" style="height: 100%; overflow-y: none;" />
            </div>
        </el-card>
    </div>
</template>

<script>
import generate_json from '../GenerateJson/generate_json';
import { ElNotification } from 'element-plus'
export default {
    name: "MyViewer",
    components: {},
    props:{
        editorContext:Object,
        required: true
    },
    watch:{
        editorContext: {
            handler (n, o) {
                this.editor_context = n
            },
            deep: true // 深度监听父组件传过来对象变化
        }
    },
    mounted() {},
    data () {
      return {
        codeLanguage: "json",
        codeString: "",
        editor_context:this.editorContext,
      }
    },
    methods: {
        generateJson(){
            try {
                let sg_json = generate_json(this.editor_context)
                this.codeString = JSON.stringify(sg_json,null,2)
                console.log(this.codeString)
            } catch (error) {
                this.codeString = ""
                console.error(error);
                ElNotification({
                    title: 'Error',
                    message: error,
                    type: 'error',
                    position: 'bottom-right',
                })
            }
        }
    }
};
</script>
