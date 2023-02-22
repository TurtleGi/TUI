<template>
  <input :type="type" class="t-timepick" name="" :class="ClassName" id="">
</template>

<script lang="ts">
 import { defineComponent } from 'vue'
  export default defineComponent({
    name: "t-timepick"
  })
</script>

<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  type:{
    type:String,
    default:'time'
  },
  size:{
    type:String,
    default: ''
  }

})
const ClassName = computed(()=>{
  return {
    [`t-timepick-${props.size}`]:props.size,
  }
})
</script>

<style lang="less" scoped>
.t-timepick {
  width: 100px;
  height: 30px;
  outline: none;
}
.t-timepick-small{
  width: 80px;
  height: 24px;
}
.t-timepick-mini {
  width: 50px;
  height: 15px;
}
</style>