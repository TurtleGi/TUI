import type{ ExtractPropTypes } from "vue";
export const footerProps = {
    height:{
        type:Number,
    },
    backgroundColor:{
        type:String,
    }
}

export type FooterProps = ExtractPropTypes<typeof footerProps>; 