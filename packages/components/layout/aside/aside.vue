<template>
    <div :class="styleClass" :style="style">
      <slot></slot>
    </div>
  </template>
  <script lang="ts">
  export default defineComponent({
      name:'TAside'
  })
  </script>
  <script setup lang="ts">
  import { defineComponent,computed,toRefs } from 'vue';
  import { asideProps } from '../props/aside';
  const props = defineProps({
      height:Number,
      backgroundColor:String,
  })
  const { height } = toRefs(props)
  const { backgroundColor } = toRefs(props)
  
  const prefixCls = 't-layout';
  const styleClass = computed(()=>{
          return `${prefixCls}-aside`;
      
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
  
  <style lang="less">
  .t-layout{    
      display: flex;
      flex-direction: column;
      flex: auto;
      &-footer{
          flex: 0 0 auto;
      }
  }
  </style>