<template>
  <div :class="ClassName">
    <slot></slot>
  </div>
</template>

<script lang="ts">
 import { computed } from '@vue/reactivity';
import { defineComponent } from 'vue'
  export default defineComponent({
    name: "TButtonGroup"
  })
</script>

<script lang="ts" setup>
const props = defineProps({
  type:{
    type:String,
    default:"center"
  },
})
const ClassName = computed(()=>{
  return `t-button-group-${props.type}`
})
</script>

<style lang="less" scoped>
.t-button-group-center{
  margin: 0 100px;
}
</style>