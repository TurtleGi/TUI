import type{ ExtractPropTypes } from "vue";
export const tableProps = {
   columns:{
    type:Object,
   },
   data:{
    type:Array<Object>,
   },
   //表格宽度
   width:{
    type:Number,
   },
    //表格高度
    height:{
     type:Number,
    },
   //是否间隔斑马纹
   stripe:{
    type:Boolean,
   },
   //是否显示纵向边框
   border:{
    type:Boolean,
   }
}

export type TableProps = ExtractPropTypes<typeof tableProps>; 