<template>
  <div class="radio-group">
    {{ label }}
    <div class="t-radio-group">
    <slot></slot>
  </div>
  </div>

</template>

<script lang="ts">
 import { defineComponent } from 'vue'
  export default defineComponent({
    name: "t-radio-group"
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
.radio-group{
  width: 500px;
  display: flex;
  justify-content: left;
}
.t-radio-group {
  width: 260px;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-left: 10px;
}
</style>