<template>
  <div class="my-panel" ref="panel">
    <el-card style="height: 100%;">
      node_name
      <el-input v-model="current_node_info.text" placeholder="node_name" />
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
    }
  }
};
</script>
