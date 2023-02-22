<template>
    <ul class="t-dropdown" :class="ClassName">
        <!-- <div :style="{backgroundColor:backgroundColor}"> -->
          <slot></slot>
        <!-- </div> -->
    </ul>
    
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "t-dropdown"
})
</script>

<script setup lang="ts">
import { type } from 'os';
import { computed,ref } from 'vue'
  const props = defineProps({
    trigger:{
      type:String,
      default:"hover"
    },
    size:{
      type:String,
      default:'normal' 
    },
    backgroundColor:{
      type:String,
      defalut:"#ffffff"
    },
    
  })
  const backgroundColor = ref(props.backgroundColor)
  const ClassName = computed(()=>{
    return props.size
  }) 
</script>

<style lang="less">
@import url('../css/iconfont.css');
* {
  margin: 0;
  padding: 0;
}
.t-dropdown li{
  width: 90px;
  height: 0;
  transition: height 0.2s ease-out;
  overflow: hidden;
  background-color: #ffffff;
  list-style: none;
  font-size: 16px;
  text-align: center;
  line-height: 40px;
}
.t-dropdown  span {
  width: 90px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  color: #409eff;
}
.t-dropdown button {
  margin-left: 0;
}
.t-dropdown:hover li {
  font-size: 16px;
  height: 40px;
  transition: height 0.2s ease-in;
  border-left: 2px solid #eee;
  border-right: 2px solid #eee;
}
.t-dropdown:hover span + li {
  border-top: 2px solid #eee;;
}
.t-dropdown:hover li:last-child {
  border-bottom: 2px solid #eee;;
}
.medium {
  font-size: 15px;
}
.medium button {
  width: 114px;
  height: 37px;
}
.medium span{
  width: 80px;
  height: 35px;
  line-height: 35px;
  text-align: center;
  color: #409eff;
}
.medium li{
  width: 80px;
  height: 0;
  font-size: 15px;
  transition: height 0.2s ease-out;
  overflow: hidden;
  background-color: #ffffff;
  list-style: none;
  text-align: center;
  line-height: 35px;
}
.medium:hover li {
  height: 35px;
  font-size: 15px;
  transition: height 0.2s ease-in;
  border-left: 2px solid #eee;
  border-right: 2px solid #eee;
}

.small {
  font-size: 14px;
}
.small button {
  width: 108px;
  height: 34px;
}
.small span{
  width: 70px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: #409eff;
}
.small li{
  width: 70px;
  height: 0;
  font-size: 14px;
  transition: height 0.2s ease-out;
  overflow: hidden;
  background-color: #ffffff;
  list-style: none;
  text-align: center;
  line-height: 30px;
}
.small:hover li {
  height: 30px;
  font-size: 14px;
  transition: height 0.2s ease-in;
  border-left: 2px solid #eee;
  border-right: 2px solid #eee;
}

.mini {
  font-size: 12px;
}
.mini button {
  width: 95px;
  height: 31px;
}
.mini span{
  width: 60px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  color: #409eff;
}
.mini li{
  width: 60px;
  height: 0;
  font-size: 12px;
  transition: height 0.2s ease-out;
  overflow: hidden;
  background-color: #ffffff;
  list-style: none;
  text-align: center;
  line-height: 25px;
}
.mini:hover li {
  height: 25px;
  font-size: 12px;
  transition: height 0.2s ease-in;
  border-left: 2px solid #eee;
  border-right: 2px solid #eee;
}
</style>