<template>
  <div :class="styleClass" :style="style">
    <slot></slot>
  </div>
</template>
    <script lang="ts">
    export default defineComponent ({
      name: "TGrid",
    });
    </script>
   <script setup lang="ts">
   import { defineComponent,computed,toRefs, onMounted,ref,useSlots } from 'vue';
   import { gridProps } from './props/grid';
   const props = defineProps({
    row:{
        type:Number,default:3
    },
    col:{
        type:Number,default:3
    },
    colWidth:{
        type:Number,default:100
    },
    isWidthSame:{
        type:Boolean,default:true
    },
    isBorder:{
        type:Boolean,default:true
    }
    
})
const { row } = toRefs(props)
const { col } = toRefs(props)
const { isWidthSame } = toRefs(props)
const { colWidth } = toRefs(props)
const { isBorder } =toRefs(props)
   const slots:any = useSlots()
   const hasAside = ref(false)
   const prefixCls = 't-grid';
   const styleClass = computed(()=>{
    if(isBorder.value){
        return prefixCls

    }
   })
   const style = computed(()=>{
   if(!isWidthSame.value){
       return {}
   }
       return {
           ...(col?.value?{'grid-template-columns':`repeat(${col.value},${colWidth?.value}px)`}:{}),
         
       }
    
})

   </script>
   <style lang="less">
   .t-grid{    
       display: grid;
       &-item{
        width: 100px;
        height: 100px;
        background-color: pink;
       }
   }
   </style>