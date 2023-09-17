<template>
    <div class="my-viewer" ref="viewer">
        <el-card class="box-card" style="height: 100%;">
            <span>
                <el-button type="primary" round @click="downloadJson">Download sg-Json</el-button>
                <el-input v-model="map_name" placeholder="Please input map_name" style="width: 200px;"/>
                <el-button type="primary" round @click="generateJson">Generate sg-Json</el-button>
            </span>
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
        map_name:"",
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
                return true
            } catch (error) {
                this.codeString = ""
                console.error(error);
                ElNotification({
                    title: 'Error',
                    message: error,
                    type: 'error',
                    position: 'bottom-right',
                })
                return false
            }
        },
        downloadJson() {
            if(this.generateJson()){
                let fileName = this.map_name==""? "default.json" : this.map_name+".json"
                console.log(fileName)
                let content = this.codeString
                // let a = document.createElement('a');
                // a.href = 'data:text/plain;charset=utf-8,' + content
                // a.download = fileName
                // document.body.appendChild(a);
                // a.click();
                // document.body.removeChild(a);
                
                // 创建一个Blob对象
                let blob = new Blob([content], { type: "application/json" });
                // 创建一个URL，该URL指向Blob对象
                let blobURL = window.URL.createObjectURL(blob);
                // 创建一个<a>元素用于下载
                let a = document.createElement('a');
                a.href = blobURL;
                a.download = fileName;
                // 模拟点击下载链接
                a.click();
                // 释放Blob URL
                window.URL.revokeObjectURL(blobURL);
            }
        }
    }
};
</script>
