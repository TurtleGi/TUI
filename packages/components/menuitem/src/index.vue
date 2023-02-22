<template>
    <li>
        <slot></slot>
    </li>
     
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "t-menuitem"
})
</script>

<script setup lang="ts">

</script>

<style lang="less" scoped>
 li {
    width: 120px;
    height: 70px;
    /* background-color: aqua; */
    text-align: center;
    line-height: 70px;
    list-style: none;
    border-bottom: 1px solid #e6e6e6;
}
 li:hover {
    color: #303133;
}
 li a{
    color: #909399;
}
</style>