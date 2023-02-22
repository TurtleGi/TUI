# table组件

<script setup lang="ts">
const columns =[{
   name:'姓名',
   key:'name'
},{
   name:'年龄',
   key:'age'
},{
    name:'性别',
    key:'sex'
},{
    name:'联系方式',
    key:'phone'
}]
const data =[{
    name:'111',
    age:22,
    sex:'男',
    phone:'123333'
},{
    name:'222',
    age:11,
    // sex:'',
    phone:'123333'
}]
</script>


  <div>
    <TTable class="table" :columns="columns" :data="data" :isHover = true ></TTable>
    <TTable  class="table" :columns="columns" :data="data"></TTable>

  </div>

```html
<TTable class="table" :columns="columns" :data="data" :isHover = true ></TTable>
<TTable  class="table" :columns="columns" :data="data"></TTable>
```
<style scoped>
.table{
    margin: 10px 0;
}
</style>
