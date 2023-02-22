<script setup lang="ts">
import { ref } from 'vue'
const color ='pink'
</script>

<template>
  <div>
    <TGrid :colWidth="100" class="grid">
      <TGridItem>123</TGridItem>
      <TGridItem>123</TGridItem>
      <TGridItem>123</TGridItem>
      <TGridItem>123</TGridItem>
      <TGridItem>123</TGridItem>
      <TGridItem>123</TGridItem>
    </TGrid>
    <TGrid :isWidthSame="false" class="grid" :isBorder="false">
      <TGridItem :isBorder="false">123</TGridItem>
      <TGridItem :isBorder="false">123</TGridItem>
    </TGrid>
  </div>
</template>

<style scoped>
.grid{
    margin: 10px 0;
}
</style>
