<template>
  <option value="" class="t-option">
    <slot></slot>
  </option>
  
</template>



<script lang="ts">
 import { defineComponent } from 'vue'
  export default defineComponent({
    name: "t-option"
  })
</script>

<script lang="ts" setup>
const props = defineProps({
  value:{
    type:String,
    default:''
  }
})
</script>

<style lang="less" scoped>
// option{
//   text-indent: 1em;
// }

</style>