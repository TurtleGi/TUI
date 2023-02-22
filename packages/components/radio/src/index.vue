<template>
  <div class="radio_bg" :class="ClassName">
    <label class="radio_label">
        <input type="radio" name="radio"/>
        <slot></slot>
    </label>
  </div>
</template>

<script lang="ts">
 import { defineComponent } from 'vue'
  export default defineComponent({
    name: "t-radio"
  })
</script>

<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  label:{
    type:String,
    default:''
  },
  size:{
    type:String,
    default: ''
  }

})
const ClassName = computed(()=>{
  return {
    [`t-radio-${props.size}`]:props.size,
  }
})
</script>

<style lang="less" scoped>
.radio_bg {
  width: 130px;
}
input {
  vertical-align:middle;
}
.t-radio-small{
  font-size: 15px;
}
.t-radio-small input {
  height: 12px;
  width: 12px;
}
.t-radio-mini{
  font-size: 12px;
}
.t-radio-mini input {
  height: 10px;
  width: 10px;
}
</style>