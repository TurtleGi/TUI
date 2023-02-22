import type{ ExtractPropTypes } from "vue";
export const headerProps = {
    height:{
        type:Number,
    },
    backgroundColor:{
        type:String,
    }
}

export type HeaderProps = ExtractPropTypes<typeof headerProps>; 