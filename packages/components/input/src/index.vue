<template>
  <div>
    <div v-if="type!='textarea'" :class="SizeName">
      {{label}}
    <input :type="type" :class="ClassName" >
    </div>
    <div v-else class="textarea_bg" :class="SizeName">
      <span>{{label}}</span>
    <textarea name="" id="t-textarea" cols="30" rows="5"></textarea>
    </div>
  </div>
    
</template>



<script lang="ts">
 import { defineComponent } from 'vue'
  export default defineComponent({
    name: "t-input"
  })
</script>

<script lang="ts" setup>
import { computed } from 'vue'
const props = defineProps({
  label:{
    type:String,
    default:''
  },
  type:{
    type:String,
    default:'text'
  },
  size:{
    type:String,
    default: ''
  }
})
const ClassName = computed(()=>{
  return {
   
    [`t-input-${props.type}`]:props.type
  }
})
const SizeName = computed(()=>{
return {
  [`t-input-${props.size}`]:props.size
}
})
</script>

<style lang="less" scoped>
input {
    height: 33px;
    width: 375px;
    font-size: 16px;
    outline: none;
    text-indent: 0.3em;
    // margin-left: 10px;
}
.t-input-date {
  width: 150px;
}
.t-input-datetime-local{
  width: 270px;
}

.t-input-textarea {
  height: 50px;
}
.textarea_bg span{
  vertical-align: top;
  margin-right: 10px;
}
.t-textarea {
  resize: vertical;
  outline:none;
}
.t-input-small  {
  font-size: 15px;
}
.t-input-small input {
  width: 300px;
  font-size: 15px;
  height: 28px;
}
.t-input-mini {
  font-size: 12px;
}
.t-input-mini input{
  width: 250px;
  font-size: 12px;
  height: 20px;
}
</style>