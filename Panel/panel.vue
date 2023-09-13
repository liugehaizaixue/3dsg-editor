<template>
  <div class="my-panel" ref="panel">
    <el-card style="height: 100%;">
      <el-upload
        action=""
          class="upload-demo"
          ref="upload"
          :on-change="handleUpLoad"
          :auto-upload="false"
          :limit="1"> <el-button type="primary" round >upload map</el-button>
      </el-upload>
      <el-divider />
      node_name
      <el-input v-model="current_node_info.text" :disabled="root_name_uneditable" placeholder="node_name" />
      node_id
      <el-input v-model="current_node_info.id" disabled placeholder="node_id" />
      type
      <el-input v-model="userData.type" disabled placeholder="type" />
      <div v-show="userData.type=='asset'||userData.type=='object'">state</div>
      <el-select v-show="userData.type=='asset'" v-model="userData.state"  placeholder="state" >
        <el-option
          v-for="item in asset_state_options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
    </el-select>
    <el-select v-show="userData.type=='object'" v-model="userData.state" :disabled="obj_state_uneditable" placeholder="state" >
        <el-option
          v-for="item in object_state_options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
    </el-select>
    <div v-show="userData.type=='asset'||userData.type=='object'">affordances</div>
    <el-select v-show="userData.type=='asset'" v-model="userData.affordances"  multiple placeholder="affordances" >
        <el-option
          v-for="item in asset_affordances_options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
    </el-select>
    <el-select v-show="userData.type=='object'" v-model="userData.affordances"  multiple placeholder="affordances" >
        <el-option
          v-for="item in object_affordances_options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        />
    </el-select>
    <div v-show="userData.type=='object'">attributes</div>
      <el-input v-show="userData.type=='object'" v-model="userData.attributes"  placeholder="attributes" />

      <el-button v-show="userData.type=='pose'" type="primary" round @click="addLink">Add Link</el-button>

    </el-card>
  </div>
</template>

<script>
import { ElMessage, ElMessageBox, ElNotification} from 'element-plus'
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
      obj_state_uneditable:false,
      root_name_uneditable:true,
      current_node_info:this.nodeInfo,
      editor_context:this.editorContext,
      userData:{
        type:"",
        state:"",
        attributes:"",
        affordances:[]
      },
      asset_state_options:[
        {
          value: 'free',
          label: 'free',
        },
        {
          value:"closed",
          lable:"closed"
        },
        {
          value:"open",
          lable:"open"
        },
        {
          value:"off",
          lable:"off"
        },
        {
          value:"on",
          lable:"on"
        }
      ],
      object_state_options:[
        {
          value: 'inside_of',
          label: 'inside_of',
        },
        {
          value: 'ontop_of',
          label: 'ontop_of',
        },
        // {
        //   value: 'inside_hand',
        //   label: 'inside_hand(连接agent时自动生成的)',
        // }
      ],
      asset_affordances_options:[
        {
          value: 'open/close',
          label: 'open/close',
        },
        {
          value: 'turn_on/turn_off',
          label: 'turn_on/turn_off',
        },
        {
          value: 'release',
          label: 'release',
        },
      ],
      object_affordances_options:[
        {
          value: 'turn_on/turn_off',
          label: 'turn_on/turn_off',
        },
        {
          value: 'pickup',
          label: 'pickup',
        },
      ]
    };
  },
  watch: {
    nodeInfo: {
      handler (n, o) {
        this.current_node_info=n
        this.userData = n.userData

        if(this.current_node_info.parent?.userData?.type=="agent"){
          this.userData.state="inside_hand"
          this.obj_state_uneditable=true
        }else{
          this.obj_state_uneditable=false
        }
        if(this.current_node_info.parent?.userData?.type=="root"){
          this.root_name_uneditable=false
        }else{
          this.root_name_uneditable=true
        }
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
    },
    handleUpLoad(file){
      const that = this
      let reader = new FileReader();   //先new 一个读文件的对象 FileReader
      if (typeof FileReader === "undefined") {  //用来判断你的浏览器是否支持 FileReader
          this.$message({
              type: "info",
              message: "您的浏览器不支持文件读取。"
          });
          return;
      }
      //  reader.readAsText(file.raw, "gb2312");  //读.txt文件
      reader.readAsArrayBuffer(file.raw); //读任意文件
      reader.onload = function (e) {
          var ints = new Uint8Array(e.target.result); //要使用读取的内容，所以将读取内容转化成Uint8Array
          let snippets = new TextDecoder('gb2312').decode(ints); //二进制缓存区内容转化成中文（即也就是读取到的内容）
          console.log("读取的内容如下：");
          console.log(snippets);
          that.loadMap(snippets)
          reader=null
          snippets=null
      };
    },
    loadMap(json){
      this.editor_context.layer.openJson(json);
      this.editor_context.resetNodes()
      this.editor_context.addPopupMenu()
      json=null
    }
  }
};
</script>
