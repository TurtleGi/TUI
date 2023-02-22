<template>
    <div class="container">
    <div class="t-progress" :style="containerStyle">
        <div :class="styleClass" :style="style"></div>
    </div>
    
{{`${per}%`}}</div>
</template>
<script lang="ts">
export default defineComponent({
    name: "TProgress",
});
</script>
<script setup lang="ts">
import { defineComponent, computed, toRefs, onMounted, ref, useSlots } from 'vue';
import { progressProps } from './progress';
const props = defineProps({
    percent: {
        type: Number, default: 25
    },
    type: {
        type: String, default: 'primary'
    },
    isFillet: {
        type: Boolean, default: true,
    }

})
const { percent } = toRefs(props)
const { type } = toRefs(props)
const { isFillet } = toRefs(props)

const slots: any = useSlots()
const per:Number = ref(null)

const hasAside = ref(false)
const prefixCls = 't-progress';
const styleClass = computed(() => {
    if(type.value){
        return `${prefixCls}-${type.value}`;

    }
})
const style = computed(() => {
    if (!percent.value&&!isFillet.value) {
        return {}
    }
    return {
        ...(percent?.value ? { 'width': `${per.value}%` } : {}),
        ...(isFillet?.value ? { 'border-radius': '10px' } : {}),

    }
})
const containerStyle = computed (()=>{
    return {
        ...(isFillet?.value ? { 'border-radius': '10px' } : {}),
    }
})
onMounted(()=>{
    if(type.value==='finished'){
        per.value =100
    }else{
        per.value = percent.value
    }
})
</script>
<style lang="less">
.container{
    display: flex;
    line-height: 20px;
}
.t-progress {
    display: flex;
    width: 400px;
    height: 20px;
    background-color: gray;

    &-primary {
        background-color: blue;
    }

    &-finished {
        background-color: green;
    }
    &-danger{
        background-color: red
        ;
    }
}
</style>