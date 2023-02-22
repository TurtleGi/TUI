import type{ ExtractPropTypes } from "vue";
export const listProps = {
   width:{
    type:Number
   },
   textAlign:{
    type:String
   }
}

export type ListProps = ExtractPropTypes<typeof listProps>; 