//size:{large,medium,small} type:{square,circle}
import type{ ExtractPropTypes } from "vue";
export const avatarProps = {
 size:{
    type:String,
 },
 type:{
    type:String,
 },
 url:{
    type:String
 }
}

export type AvatarProps = ExtractPropTypes<typeof avatarProps>; 