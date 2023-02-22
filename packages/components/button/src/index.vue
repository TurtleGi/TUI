<template>
  <button 
  class="Button" 
  :class="styleClass"
  :disabled="disabled"
  :round="round"
  :icon="icon"
  :circle="circle"
  :loading="loading">
  <slot></slot>
  </button>
  
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "TButton"
})
</script>
<script setup lang="ts">
import { ref, computed } from 'vue'
  const props = defineProps({
    type:{
      type:String,
      default:" ",
      require:true,
      validator: function(val:string){
       return ['primary','success', 'warning', 'danger','info'].includes(val)
      }
    },
    disabled:{
      type: Boolean,
      default:false
    },
    round:{
      type:Boolean,
      default:false
    },
    icon:{
      type:Boolean,
      default:false
    },
    incofont:{
      type:String,
      default:'',
    },
    loading:{
      type:Boolean,
      default:false
    },
    circle:{
      type:Boolean,
      default:false
    }
  })
  const styleClass = computed (()=> {
    return {
      [`t-button-${props.type}`]: props.type,
      "disabled":props.disabled,
      "round":props.round,
      "icon":props.icon,
      "loading":props.loading,
      "circle":props.circle
    }
  })
</script>

<style lang="less" scoped>
  @import url('../index.less');
</style>