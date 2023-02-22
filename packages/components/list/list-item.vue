<template>
    <div :class="styleClass">
    <!-- 可以写一个里面包含图像的作为扩展 -->
      <slot></slot>
    </div>
  </template>
    <script lang="ts">
    export default defineComponent ({
      name: "TListItem",
    });
    </script>
   <script setup lang="ts">
   import { defineComponent,computed,toRefs, onMounted,ref,useSlots } from 'vue';
   const prefixCls = 't-list';
   const styleClass = computed(()=>{
      //  if(!hasAside?.value){
      //      return prefixCls;
      //  }
      return`${prefixCls}-item`
   })
   </script>