import type{ ExtractPropTypes } from "vue";
export const asideProps = {
    height:{
        type:Number,
    },
    backgroundColor:{
        type:String,
    }
}

export type AsideProps = ExtractPropTypes<typeof asideProps>; 