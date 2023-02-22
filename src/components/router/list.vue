<script setup lang="ts">
import { ref } from 'vue'
const color ='pink'
</script>

<template>
  <div>
    <TList class="list" header="我是标题" textAlign="left">
        <TListItem>This is a piece of text.</TListItem>
        <TListItem>This is a piece of text.</TListItem>
        <TListItem>This is a piece of text.</TListItem>
    </TList>

    <TList class="list" :width="400">
        <TListItem>This is a piece of text.</TListItem>
        <TListItem>This is a piece of text.</TListItem>
        <TListItem>This is a piece of text.</TListItem>
    </TList>
  </div>
</template>

<style scoped>
.list{
  margin: 20px 0;
}
</style>
