<template>
  <div :class="styleClass">
    <slot></slot>
  </div>
</template>
  <script lang="ts">
  export default defineComponent ({
    name: "TLayout",
  });
  </script>
 <script setup lang="ts">
 import { defineComponent,computed,toRefs, onMounted,ref,useSlots } from 'vue';
 const slots:any = useSlots()
 const hasAside = ref(false)
 const prefixCls = 't-layout';
 
 const styleClass = computed(()=>{

    return [  `${prefixCls}`,
        { [`${prefixCls}-has-aside`]: hasAside.value }
        ];
 })
 onMounted(()=>{
hasAside.value = slots.default().some((child: { type: { name: string; }; }) => child.type.name === 'TAside');
// (child => child.type.name === 'Aside')
 })
 </script>
 <style lang="less">
 .t-layout{    
     display: flex;
     flex-direction: column;
     flex: auto;
     &&-has-aside{
     flex-direction: row;
     }
     &-header,&-footer{
         flex: 0 0 auto;
     }
 }
 </style>