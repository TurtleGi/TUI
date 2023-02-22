<template>
    <div :class="styleClass" :style="style">
      <slot></slot>
    </div>
  </template>
    <script lang="ts">
    export default defineComponent ({
      name: "TGridItem",
    });
    </script>
   <script setup lang="ts">
   import { defineComponent,computed,toRefs, onMounted,ref,useSlots } from 'vue';
   const slots:any = useSlots()
   const props = defineProps({
    isBorder:{
        type:Boolean,default:true
    }
    
})
const {isBorder} = toRefs(props)
   const prefixCls = 't-grid';
   const styleClass = computed(()=>{
      return`${prefixCls}-item`
   })
   const style = computed(()=>{
   if(!isBorder.value){
       return {}
   }
       return {
           ...(isBorder?.value?{'border':'1px solid black'}:{}),
         
       }
    return {}
    
})
   </script>
