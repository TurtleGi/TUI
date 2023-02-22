<template> 
        <div :class="styleClass" >
        <img :src="url" :class="styleClass" :style="style" />
    </div>
 

</template>
<script lang="ts">
export default defineComponent({
    name: "TAvatar",
});
</script>
<script setup lang="ts">
import { defineComponent, computed, toRefs, onMounted, ref, useSlots } from 'vue';
import { avatarProps } from './avatar';
const props = defineProps({
    size: {
        type: String,
        default:'medium'
    },
    type: {
        type: String,
        default:'square'
    },
    url:{
        type:String,
        default:''
    }
})
const { size } = toRefs(props)
const { type } = toRefs(props)
const {url } = toRefs(props)
const slots: any = useSlots()
const hasAside = ref(false)
const prefixCls = 't-avatar';
const styleClass = computed(() => {
 if(size.value||type.value){

        return [  `${prefixCls}-${size.value}`,
        `${prefixCls}-${type.value}`
        ];
       

    }
})
const style = computed(() => {
    if (!size.value&&!type.value) {
        return {}
    }
/*     return {
        ...(size?.value==='small' ? { 'width': '50px' } : size?.value==='large'?{'width': '120px'}:{}),
        ...(type?.value==='circle' ? { 'width': '50px' } : {}),

    }
    return {} */

})
  /*    onMounted(()=>{
  hasAside.value = slots.default().some((child: { type: { name: string; }; }) => child.type.name === 'TAside');
}) */
</script>
<style lang="less">
.t-avatar {
    
    &-primary {
        width: 100px;
        height: 100px;
        // grid-column: 1 / 3;
        // grid-row: 1 / 3
    }
    &-large{
        width: 120px;
        height: 120px;
        
    }
    &-medium{
        width: 100px;
        height: 100px;
        
    }
    &-small{
        width: 70px;
        height: 70px;
    }
    &-circle{
        border-radius: 50%;
    }
}
</style>