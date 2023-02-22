<template>
      <li >
      <slot></slot>
    </li>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
  export default defineComponent({
    name: "t-dropdown-item"
  })
</script>

<script lang="ts" setup>
const props = defineProps({
  backgroundColor:{
      type:String,
      defalut:"#ffffff"
    }
})
</script>

<style lang="less">

</style>