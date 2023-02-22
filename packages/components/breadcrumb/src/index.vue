<template>
    <ul :class="ClassName" class="breadcrumb">
      <slot></slot>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
  export default defineComponent({
    name: "t-breadcrumb"
  })
</script>

<script lang="ts" setup >
import {computed,ref } from 'vue'
  const props = defineProps({
    separator :{
      type:String,
      default: "none"
    }
  })

  const ClassName = computed(()=>{
    return `t-breadcrumb-${props.separator}`
  })
</script>

<style lang="less">
@import url('../index.less');
</style>