<template>
    <div :class="styleClass" :style="style">
      <slot></slot>
    </div>
  </template>
  <script lang="ts">
  export default defineComponent({
      name:'TFooter'
  })
  </script>
  <script setup lang="ts">
  import { defineComponent,computed,toRefs } from 'vue';
  import { footerProps } from '../props/footer';
  const props = defineProps({
      height:Number,
      backgroundColor:String,
  })
  const { height } = toRefs(props)
  const { backgroundColor } = toRefs(props)
  
  const prefixCls = 't-layout';
  const styleClass = computed(()=>{
          return `${prefixCls}-footer`;
      
  })
  const style = computed(()=>{
      if(!height?.value&&!backgroundColor?.value){
          return {}
      }
          return {
              ...(height?.value?{'height':height.value+'px'}:{}),
              ...(backgroundColor?.value?{'background-color':backgroundColor.value}:{})
          }
      
  })
  </script>
  