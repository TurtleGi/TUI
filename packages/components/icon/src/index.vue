<template>
    <svg id="icon" aria-hidden="true">
  <use :xlink:href="IconName"></use>
    </svg>
    
</template>
  <script lang="ts">
  import '../iconfont'
  import { defineComponent } from 'vue'
  export default defineComponent({
    name: "t-icon"
  })
  </script>
  <script lang="ts" setup>
  import {computed } from 'vue'
  const props = defineProps({
    name :{
      type:String,
      default: ""
    }
  })

  const IconName = computed (()=> {
    return `#icon-${props.name}`
    
  })
  </script>

  <style lang="less">
#icon {
  width: 2em;
  height: 3em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}

</style>