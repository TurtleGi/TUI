<template>
  <div>
    <thead>
      <tr>
        <th v-for="(item,index) in columns" :key="index">{{ item.name }}</th>
      </tr>
    </thead>
  </div>
</template>
<script lang="ts">
export default{
    name:'TableHeader'
}
</script>
<script setup lang="ts">
import { toRefs } from 'vue';
   const props = defineProps({
    columns:Object,
})
const { columns } = toRefs(props)


</script>

<style></style>