<template>
    <ul class="t-menu" :class="ClassName" :style="{color:color,backgroundColor:backgroundColor}">
        <slot></slot>
    </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "t-menu"
})
</script>

<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
    color:{
        type:String,
        default:"#909399"
    },
    backgroundColor:{
        type:String,
        defalut:"#ffffff"
    },
    mode:{
      type:String,
      default:"vertical"
    }
})

const ClassName = computed(()=>{
    return `t-menu-${props.mode}`
})
</script>

<style>
.t-menu {
    width: 800px;
    height: 70px;
    background-color: #ffffff;
    color: #909399;
    display: flex;
    justify-content: left;
    padding-left: 40px;
    border-bottom: 1px solid #e6e6e6;
    cursor: pointer;
}

/* .t-menu li a:focus {
    border-bottom: 1px solid red;
} */
.t-menu-horizontal {
    flex-direction: column;
    padding-left: 0;
    padding-top: 40px;
    height: 400px;
    width: 120px;
    
}

.t-menu-horizontal li ul li{
    margin-left: 120px;
}
</style>