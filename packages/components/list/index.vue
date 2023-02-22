<template>
    <div :class="styleClass" :style="style">
{{ header }}
        <slot></slot>
    </div>
</template>
<script lang="ts">
export default defineComponent({
    name: "TList",
});
</script>
<script setup lang="ts">
import { defineComponent, computed, toRefs, onMounted, ref, useSlots } from 'vue';
import { listProps } from './props/list';
const props = defineProps({
    width: {
        type: Number, default: 200
    },
    align: {
        type: String, default: 'left'
    },
    header:{
        type:String
    }
})
const { width } = toRefs(props)
const { align } = toRefs(props)
const {header} = toRefs(props)
const prefixCls = 't-list';
const styleClass = computed(() => {

        return prefixCls


})
const style = computed(() => {
    if (!width.value && !align.value) {
        return {}
    }
    return {
        ...(width?.value ? { 'width': `${width.value}px` } : {}),
        ...(align?.value?{'text-align':align.value}:{'text-align':'center'})
    }

})
</script>
<style lang="less">
.t-list {
    display: flex;
    flex-direction: column;
    background-color: pink;
    padding: 10px;
    &-item {
        padding: 10px;
        border-bottom: 1px solid #eee;

    }

    &-item:last-child {
        border-bottom: none;

    }
}
</style>