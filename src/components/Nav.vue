<template>
  <div class="nav">
    <router-link :to="{path:'/button'}" class="link-item">
      <a href="">button组件</a>
    </router-link>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="less">
.nav {
  display: flex;
  position: fixed;
  top: 30px;
}
</style>
