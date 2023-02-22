import type{ ExtractPropTypes } from "vue";
export const mainProps = {
    height:{
        type:Number,
    },
    backgroundColor:{
        type:String,
    }
}

export type MainProps = ExtractPropTypes<typeof mainProps>; 