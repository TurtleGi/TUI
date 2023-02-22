<script setup lang="ts">
import { ref } from 'vue'
</script>

<template>
  <div class="ButtonBox">
    <div class="ButtonFox"> <!-- 默认按钮 -->
      <t-button type="primary">primary</t-button>
      <t-button type="success">sucesss</t-button>
      <t-button type="warning">warning</t-button>
      <t-button type="danger">danger</t-button>
  </div>
  <div class="ButtonFox">  <!-- 禁用按钮 -->
      <t-button type="primary" disabled>primary</t-button>
      <t-button type="success" disabled>sucesss</t-button>
      <t-button type="warning" disabled>warning</t-button>
      <t-button type="danger" disabled>danger</t-button>
  </div>
  <div class="ButtonFox">  <!-- 圆角按钮 -->
      <t-button type="primary" round>primary</t-button>
      <t-button type="success" round>sucesss</t-button>
      <t-button type="warning" round>warning</t-button>
      <t-button type="danger" round>danger</t-button>
  </div>
  <div class="ButtonFox">  <!-- 字体图标按钮 -->
      <t-button type="primary" icon >&#xe607;</t-button>
      <t-button type="info" icon >&#xe608;</t-button>
      <t-button type="warning" icon >&#xe605;</t-button>
      <t-button type="success"  icon >&#xe606;</t-button>
  </div>
  <div class="ButtonFox">  <!-- 加载按钮 -->
    <t-button type="primary" :loading="true">加载中...</t-button>
  </div>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
.ButtonFox {
  height: 100px;
}

</style>
