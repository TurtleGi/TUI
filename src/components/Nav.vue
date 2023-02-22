<template>
  <div class="nav">
    <router-link :to="{path:'/button'}" class="link-item">
      <a href="">button组件</a>
    </router-link>
    <router-link :to="{path:'/layout'}" class="link-item">
      <a href="">Layout组件</a>
    </router-link>
    <router-link :to="{path:'/grid'}" class="link-item">
      <a href="">Grid组件</a>
    </router-link>
    <router-link :to="{path:'/list'}" class="link-item">
      <a href="">List组件</a>
    </router-link>
    <router-link :to="{path:'/table'}" class="link-item">
      <a href="">Table组件</a>
    </router-link>
    <router-link :to="{path:'/avatar'}" class="link-item">
      <a href="">Avatar组件</a>
    </router-link>
    <router-link :to="{path:'/progress'}" class="link-item">
      <a href="">Progress组件</a>
    </router-link>
    <router-link :to="{path:'/icon'}" class="link-item">
      <span>icon组件</span>
    </router-link>
    <router-link :to="{path:'/breadcrumb'}" class="link-item">
      <span>breadcrumb组件</span>
    </router-link>
    <router-link :to="{path:'/dropdown'}" class="link-item">
      <span>dropdown组件</span>
    </router-link>
    <router-link :to="{path:'/menu'}" class="link-item">
      <span>menu组件</span>
    </router-link>
    <router-link :to="{path:'/form'}" class="link-item">
      <span>form组件</span>
    </router-link>
    <router-link :to="{path:'/switch'}" class="link-item">
      <span>switch组件</span>
    </router-link>
    <router-link :to="{path:'/timepick'}" class="link-item">
      <span>datepicker组件</span>
    </router-link>
    <router-link :to="{path:'/upload'}" class="link-item">
      <span>upload组件</span>
    </router-link>
  </div>
</template>

<script setup lang="ts"></script>
<style lang="less">
// .nav {
//   display: flex;
//   position: fixed;
//   top: 30px;
//   .link-item{
//     margin: 0 10px;
//   }
// }
.nav {
  // height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
   .link-item{
    margin: 0 10px;
  }
}
</style>
