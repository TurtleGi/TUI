<template>
    <form :style="{width:width ,height:height}" :class="ClassName" >
        <slot></slot>
    </form>
</template>



<script lang="ts">
 import { defineComponent } from 'vue'
  export default defineComponent({
    name: "t-form"
  })
</script>

<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  width:{
    type:String,
    defalut:""
  },
  height:{
    type:String,
    defalut:""
  },
  inline:{
    type:Boolean,
    default:false
  },
  size:{
    type:String,
    default: ''
  }
})
const ClassName = computed(()=>{
  return {
    [`t-form-${props.size}`]:props.size,
    "inline" :props.inline,
  }
})
</script>

<style lang="less">
// form {
//   width: 485px;
//   height: 460px;
// }
.inline {
  height: 100px;
  display: flex;
  flex-direction: row;
  // justify-content: space-around;
  // padding-left: 20px;
  // background-color: pink;
}
.t-form-small {
  font-size: 15px;
}
.t-form-small div input,
.t-form-small div select {
  font-size: 15px;
  height: 28px;
}
.t-form-small div select option {
  font-size: 15px;
}
.t-form-mini {
  font-size: 12px;
}
.t-form-mini div input,
.t-form-mini div select {
  font-size: 12px;
  height: 20px;
}
.t-form-mini div select option {
  font-size: 12px;
}
</style>