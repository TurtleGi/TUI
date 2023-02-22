<template>
    <div>
        <tbody>
            <tr v-for="(item, index) in tableData" :key="index" :class="styleClass">
                <td v-for="(value, key) in item" :key="key">
                    {{ value }}
                </td>
            </tr>
        </tbody>
    </div>
</template>
<script lang="ts">
export default {
    name: 'TableBody'
}
</script>
<script setup lang="ts">
import { onMounted, toRefs, ref, Ref, computed } from 'vue';
const props = defineProps({
    data: Array,
    columns: Array,
    isHover:Boolean
})

const { data } = toRefs(props)
const { columns } = toRefs(props)
const { isHover } = toRefs(props)

const prefixCls = 't-table';

const tableData:Array<any> = ref([])
tableData.value = data?.value
onMounted(() => {
    //在此处作key的匹配，防止出现没有赋值data错位的情况
    let col = []
    let colNum = 0
    columns?.value?.forEach(el => {
        col.push(el.key)
    })
    let newTableData:any = ref([])
    newTableData.value =tableData.value
    tableData?.value.forEach((element,index) => {
        colNum = 0
        let arr:Array<any> =[]

        for(var key in element){
            // 将对象转换成数组
            let obj = {}
            //注意此处需要加[],否则显示的键名称为key
            arr.push({[key]:element[key]})
        }
        for (var key in element) {
 
            if (colNum === col.indexOf(key)) {
            } else {                
                let myKey = col[colNum]
                arr.splice(colNum,0,{[myKey]:''})
                let result:any = {}
                arr.forEach((item) => 
                result[Object.keys(item)[0]] = Object.values(item)[0])
                newTableData.value[index] = result
            }
            colNum++
        }
    });

 
})
const styleClass = computed(()=>{
    if(isHover.value === true){
      return `${prefixCls}-hover`
}
return ''

})
</script>
  
<style>

</style>