<template>
  <div class="checkbox_bg" :class="ClassName">
    <label class="checkbox_label">
        <input type="checkbox"/>
        <slot></slot>
    </label>
  </div>
  
</template>

<script lang="ts">
 import { defineComponent } from 'vue'
  export default defineComponent({
    name: "t-checkbox"
  })
</script>

<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  size:{
    type:String,
    default: ''
  }

})
const ClassName = computed(()=>{
  return {
    [`t-checkbox-${props.size}`]:props.size,
  }
})
</script>

<style lang="less" scoped>
.checkbox_bg{
  width: 200px;
  height: 40px;
  
}
.checkbox_label {
  cursor: pointer;
}
input {
  vertical-align:middle;
}
.t-checkbox-small {
  font-size: 15px;
}
.t-checkbox-mini input {
  height: 12px;
  width: 12px;
}
.t-checkbox-mini{
  font-size: 12px;
}
.t-checkbox-mini input {
  height: 10px;
  width: 10px;
}
</style>