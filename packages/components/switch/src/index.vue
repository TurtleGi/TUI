<template>
    <label class="switch" :class="ClassName">
        {{ label }}
        <input type="checkbox" :disabled="disabled"/>
        <span class="active" v-if="active_text">{{ active_text }}</span>
        <span class="s" :class="ClassName"></span>
        <span class="inactive" v-if="inactive_text">{{ inactive_text }}</span>
    </label>
</template>

<script lang="ts">
 import { defineComponent } from 'vue'
  export default defineComponent({
    name: "t-switch"
  })
</script>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
  label:{
    type:String,
    default:''
  },
  active_text:{
    type:String,
    default:''
  },
  inactive_text:{
    type:String,
    default:''
  },
  active_color:{
    type:String,
    default:''
  },
  inactive_color:{
    type:String,
    default:''
  },
  disabled:{
    type:Boolean,
    default:false
  }
})
const ClassName = computed(()=>{
  return {
    "disabled":props.disabled
  }
})
</script>


<style scoped>
.switch {
    display: flex;
    flex-direction: row;
    justify-content: left;
}
.switch .active{
    color: #009CFC;
}
.switch input{
    display: none;
}
.s{
    position: relative;
    display: block;
    width: 45px;
    height: 20px;
    background: #ccc;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.4s;
    margin-left: 10px;
    margin-top: 4px;
}
.s:before{
    content: "";
    width: 17px;
    height: 17px;
    position: absolute;
    top: 1px;
    left: 2px;
    border-radius: 15px;
    background: #eee;
    transition: 0.4s;
}
.switch input:checked +.s{
    background: #009CFC;
}
.switch input:checked+.s:before{
    transform: translateX(25.5px);
    background: #fff;
}
.switch input:checked +.active {
    color: #213547;
}
.switch input:checked + .active+ .s +.inactive {
    color: #009CFC;
}
.switch input:checked +.active+ .s{
    background: #009CFC;
}
.switch input:checked + .active+.s:before{
    transform: translateX(25.5px);
    background: #fff;
}
.disabled {
    cursor: not-allowed;
}
</style>