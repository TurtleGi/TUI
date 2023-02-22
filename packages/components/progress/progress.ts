import type{ ExtractPropTypes } from "vue";
export const progressProps = {
    //完成百分比
    percent:{
        type:Number,
    },
    //类型
    type:{
        type:String,

    },
    //是否圆角
    isFillet:{
        type:Boolean,
    },
    
}

export type ProgressProps = ExtractPropTypes<typeof progressProps>; 