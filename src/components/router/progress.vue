<template>
  <div>
    <div class="progress-item">
<t-progress :isFillet="false"></t-progress>

    </div>
    <div class="progress-item">
<t-progress type="danger" :percent="60"></t-progress>

    </div>
    <div class="progress-item">
<t-progress type="finished"></t-progress>

    </div>


  </div>
</template>

<style scoped>
.progress-item{
    margin: 10px 0;
}
</style>
