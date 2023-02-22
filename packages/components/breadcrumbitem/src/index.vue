<template>
  <router-link :to="to" >
      <li >
      <slot></slot>
    </li>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
  export default defineComponent({
    name: "t-breadcrumb-item"
  })
</script>

<script lang="ts" setup>
import {computed,ref} from 'vue'
  const props = defineProps({
    path :{
      type:String,
      default: "breadcrumb"
    }
  })  
  const to = `/${props.path}`
</script>

<style lang="less">

</style>