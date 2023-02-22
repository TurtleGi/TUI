<script setup lang="ts">
import { ref } from 'vue'
const color ='pink'
</script>

<template>
  <div>
    <TLayout class="layout">
      <TAside backgroundColor="yellow" class="layout-aside">
        aside
      </TAside>
      <TLayout><THeader :backgroundColor="color" class="layout-header">header</THeader>
      <TFooter backgroundColor="green" class="layout-footer">footer</TFooter></TLayout>
      
    </TLayout>
    <TLayout class="layout">
     
    <THeader :backgroundColor="color">header</THeader>
    <TFooter backgroundColor="green">footer</TFooter>
      
    </TLayout>
  </div>
</template>

<style scoped lang="less">
.layout{
  margin: 10px 0;
  &-aside{
  width: 100px;
  height: 300px;
}
&-header{
  width: 300px;
  height: 64px;
}
&-footer{
  width: 300px;
  height: 236px;
}
}

</style>
