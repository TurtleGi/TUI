<template>
  <div class="checkbox_box">
    {{ label }}
    <div class="checkbox_bg">
      
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
 import { defineComponent } from 'vue'
  export default defineComponent({
    name: "t-checkbox-group"
  })
</script>

<script lang="ts" setup>
const props = defineProps({
  label:{
    type:String,
    default:''
  },
})
</script>

<style lang="less" scoped>
.checkbox_box {
  width: 580px;
  display: flex;
  // flex-wrap: wrap;
  justify-content: left;
}
.checkbox_bg {
  width: 400px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-left: 15px;
}
</style>