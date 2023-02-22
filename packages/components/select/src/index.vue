<template>
  <div :class="ClassName">
    {{ label }}
    <select name="" id="">
    <slot></slot>
    </select>
  </div>
  
</template>



<script lang="ts">
 import { defineComponent } from 'vue'
  export default defineComponent({
    name: "t-select"
  })
</script>

<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  label:{
    type:String,
    default:''
  },
  size:{
    type:String,
    default: ''
  }

})
const ClassName = computed(()=>{
  return {
    [`t-select-${props.size}`]:props.size,
  }
})
</script>

<style lang="less" scoped>
select {
    height: 33px;
    width: 375px;
    outline: none;
    font-size: 16px;
    // text-indent: 0.3em;
    // margin-left: 10px;
}
.t-select-small  {
  font-size: 15px;
}
.t-select-small select {
  width: 300px;
  font-size: 15px;
  height: 28px;
}
.t-select-mini {
  font-size: 12px;
}
.t-select-mini select{
  width: 250px;
  font-size: 12px;
  height: 20px;
}
</style>