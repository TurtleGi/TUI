<script setup lang="ts">
import Nav from "./components/Nav.vue";

</script>

<template>
  <div>
    <t-layout class="layout">
      <t-aside class="aside">
        <Nav />
      </t-aside>
      <t-main class="main">
        <router-view></router-view>
      </t-main>
    </t-layout>
  </div>
</template>

<style scoped lang="less">
.layout{
min-width: 1280px;
.aside{
  min-width: 300px;
}
.main{
min-width: 800px;
}}
</style>
