<template>
  <div :class="styleClass">
    <TableHeader :columns="columns"></TableHeader>
    <TableBody :data="data" :columns="columns" :isHover ="isHover"></TableBody>
  </div>
</template>
    <script lang="ts">
    export default defineComponent ({
      name: "TTable",
    });
    </script>
   <script setup lang="ts">
   import { defineComponent,computed,toRefs, onMounted,ref,useSlots } from 'vue';
   import { tableProps } from './props/table';
   import TableHeader from './table-header/index.vue'
   import TableBody from './table-body/index.vue'
   import TableFooter from './table-footer/index.vue'
   const slots:any = useSlots()
   const hasAside = ref(false)
   const props = defineProps({
    columns:Array,
    data:Array,
   //表格宽度
    width:Number,
    //表格高度
    height: Number,
   //是否间隔斑马纹
   stripe:{
    type:Boolean,
    default:false,
   },
   //是否显示纵向边框
   border:{
    type:Boolean,
    default:false,

   },
   //是否悬浮具有背景色
   isHover:{
    type:Boolean,
    default:false
   }
    
})
const { columns } = toRefs(props)
const { data } = toRefs(props)
const { width } = toRefs(props)
const { height } = toRefs(props)
const { stripe } = toRefs(props)
const { border } = toRefs(props)
const {isHover } =toRefs(props)
   const prefixCls = 't-table';
   
   const styleClass = computed(()=>{
      return prefixCls
   })
   onMounted(()=>{
//   hasAside.value = slots.default().some((child: { type: { name: string; }; }) => child.type.name === 'TAside');
  // (child => child.type.name === 'Aside')
   })
   </script>
   <style lang="less">
   .t-table{
   td{
    width: 80px;
    border: 1px solid black;
   }
   &-hover:hover{
    background-color: #eee;
   }
   th{
    width: 80px;
    border: 1px solid black;

   }
   }
   </style>