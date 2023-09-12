<template>
  <div class="my-panel" ref="panel">
    <el-collapse>
      <el-input v-model="current_node_info.text" placeholder="node_name" />
      <el-input v-model="current_node_info.id" disabled placeholder="node_id" />
      <el-input v-model="userData.type" disabled placeholder="type" />
      <el-button v-show="userData.type=='pose'" type="primary" round @click="addLink">Add Link</el-button>
    </el-collapse>
  </div>
</template>

<script>
import { ElMessage, ElMessageBox } from 'element-plus'
export default {
  name: "MyPanel",
  components: {

  },
  props: {
    nodeInfo:Object,
    editorContext:Object,
    required: true
  },
  data() {
    return {
      current_node_info:this.nodeInfo,
      editor_context:this.editorContext,
      userData:{
        type:""
      },
    };
  },
  watch: {
    nodeInfo: {
      handler (n, o) {
        this.current_node_info=n
        this.userData = n.userData
      },
      deep: true // 深度监听父组件传过来对象变化
    },
    editorContext: {
      handler (n, o) {
        this.editor_context = n
      },
      deep: true // 深度监听父组件传过来对象变化
    }
  },
  created() {

  },
  mounted() {
    console.log(this.nodeInfo)
  },
  methods: {
    addLink(){
      // this.editor_context.test()
      // this.editor_context.test()
      // console.log("test add Link")
      ElMessageBox.prompt('请选择连接的目标pose id', 'Tip', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        inputErrorMessage: 'Invalid Email',
        })
      .then(({ value }) => {
        let canLink =()=>{
          let node = this.$parent.search_node(value)
          if(node==""){
            return false
          }
          if(node.userData.type!="pose"){
            return false
          }
          if(node.id==this.current_node_info.id){
            return false
          }
          return true
        }
        if(canLink()){
          let node_B = this.$parent.search_node(value)
          let node_A = this.$parent.search_node(this.current_node_info.id)
          this.editor_context.addLinkNoArrow(node_A,node_B)
          ElMessage({
            type: 'success',
            message: `成功连接到:${value}`,
          })
        }else{
          ElMessage({
          type: 'error',
          message: '目标id错误',
        })
        }
      })
      .catch(() => {})
    }
  }
};
</script>
