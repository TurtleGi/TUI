import type{ ExtractPropTypes } from "vue";
export const gridProps = {
    //行数
    row:{
        type:Number,
    },
    col:{
        type:Number,

    },
    //每个各自宽度是否相同
    isWidthSame:{
        type:Boolean,
    },
    //每个格子宽度
    colWidth:{
        type:Number,
    },
    backgroundColor:{
        type:String,
    },
    //是否具有边框
    isBorder:{
        type:Boolean
    }
}

export type GridProps = ExtractPropTypes<typeof gridProps>; 