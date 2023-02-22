<template>
    <div>
      <slot></slot>
    </div>
      
</template>



<script lang="ts">
 import { defineComponent } from 'vue'
  export default defineComponent({
    name: "t-form-item"
  })
</script>

<script lang="ts" setup>
const props = defineProps({

})
</script>

<style lang="less" scoped>
div {
  padding-top: 10px;
  padding-left: 10px;
}
</style>