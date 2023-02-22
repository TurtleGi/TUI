<template>
  <div class="file_upload" v-if="preview==true">
  <div class="file_show" v-for="(item ,index) in urlArr">
      <img :src="item" alt=""> 
      <div class="deleteImg" @click.native="deleteImg">{{ index }}</div>
      <div class="mask"></div>  
  </div>
    <div class="upload_preview" @click.native="triggerUpload">
      <div class="upload_img"></div>
      <input ref="fileInput" v-if="props.accept!=true" type="file" name="file" style="display: none" @change.native="handleFileChange"/>
    </div>
  </div>
  <div class="file-upload" v-else-if="contraction==true">
      <div class="upload-area" @click.native="triggerUpload">
      <span>点击上传</span>
      <input ref="fileInput" accept="image/jpg,image/png" type="file" name="file" style="display: none" @change.native="handleFileChange"/>
    </div>
    <span class="illustrate">
      只能上传jpg/png文件,且只允许上传一次
    </span>
    <div v-for="(item,index) in arr2" class="contraction" >
      <div class="contraction_img">
        <img :src="item.url" alt="">
      </div>
      <div class="contraction_name">{{ item.name }}</div>
      <div class="deletecon" @click="deletecon">{{ index }}</div>
    </div>
  </div>
  <div class="file-upload" v-else>
      <div class="upload-area" @click.native="triggerUpload">
      <span>点击上传</span>
      <input ref="fileInput" v-if="props.accept!=true" type="file" name="file" style="display: none" @change.native="handleFileChange"/>
      <input ref="fileInput" v-else accept="image/jpg,image/png" type="file" name="file" style="display: none" @change.native="handleFileChange"/>
    </div>
    <span class="illustrate" v-if="props.accept!=true">
      可上传任意文件,且不超过500kb
    </span>
    <span class="illustrate" v-else>
      只能上传jpg/png文件,且不超过500kb
    </span>
    <div v-for="(item,index) in arr" class="rendering" >
      <div>{{ item }}</div>
      <div class="delete" @click="deleteFile">{{ index }}</div>
    </div>
  </div>
  
</template>

<script lang="ts">
   import { defineComponent } from 'vue'
  export default defineComponent({
    name: "t-upload"
  })
</script>
<script lang="ts" setup>
import {reactive,ref} from 'vue'
const props = defineProps({
  action: { // url地址
    type: String,
    required: true
  },
  accept:{
    type:Boolean,
    default:false
  },
  preview:{
    type:Boolean,
    default:false
  },
  contraction:{
    type:Boolean,
    default:false
  }
})
const fileInput = ref<null | HTMLInputElement>(null)
// var value = fileStatus.value
// 1.div点击事件
const triggerUpload = () => {
    if(fileInput.value) {
        fileInput.value.click()
    }
}
// 通过div来触发input的change事件
var arr:any = reactive([])
var urlArr:any = reactive([])
var arr2:any = reactive([])
const handleFileChange = (e:Event) => {  
  const target = e.target as HTMLInputElement
  const files = target.files
  if(files) {
    let obj:any ={
      name:'',
      url:''
    }
    let reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = function()
    {
        urlArr.push(reader.result)
        // urlArr = JSON.parse(JSON.stringify(urlArr))
        obj.url = reader.result
        const uploadedFileName = files[0].name
        obj.name=uploadedFileName
        arr.push(uploadedFileName)
        arr2.push(obj)
    }
    
    
  }
}
const deleteFile = (e:Event)=> {
  const res = e.target as HTMLInputElement
  arr.splice(res.innerHTML, 1)
}
const deleteImg = (e:Event)=>{
  const res = e.target as HTMLInputElement
  urlArr.splice(res.innerHTML, 1)
}
const deletecon = (e:Event)=>{
  const res = e.target as HTMLInputElement
  arr2.splice(res.innerHTML,1)
}
</script>

<style>
.file_upload {
  display: flex;
  justify-content: left
}
.upload-area {
  background-color: #409eff;
  width: 70px;
  height: 30px;
  border-radius: 2px;
  font-size: 14px;
  color: #ffffff;
  text-align: center;
  line-height: 30px;
}

.upload-area:hover {
  background-color: #66b1ff;
  cursor: pointer;
}
.upload_preview {
  width: 160px;
  height: 160px;
  /* background-color: pink; */
  position: relative;
  border: 1px dashed #c0ccda;
  border-radius: 5px;
  cursor: pointer;
}
.upload_preview:hover {
  border: 1px dashed #409eff;
}
.upload_img{
  width: 40px;
  height: 40px;
  /* background-color: aqua; */
  position: absolute;
  top: 40%;
  left: 40%;
  transform: translate(-40%,-30%);
  background: url(../img/add.png) no-repeat top center/100%;
}
.illustrate {
  font-size: 10px;
}
.rendering{
  font-size: 10px;
  color: #616367;
  width: 350px;
  height: 24px;
  /* background-color: pink; */
  display: flex;
  justify-content: space-between;
  
}
.rendering:hover {
  color:#66b1ff;
  cursor: pointer;
}
.delete{
  width: 12px;
  height: 12px;
  margin-top: 6px;
  font-size: 0;
  background: url(../img/true.png) no-repeat top center/100%;
}
.rendering:hover .delete {
  background: url(../img/delete.png) no-repeat top center/100%;;
}
.file_show {
  width: 160px;
  height: 160px;
  position: relative;
}
.file_show img {
  width: 100%;
  height: 100%;
}
.file_show:hover .mask{
  display: block;
  cursor: pointer;
}
.file_show:hover .deleteImg{
  display: block;

}
.mask {
  width: 160px;
  height: 160px;
  background-color: rgba(0, 0, 0, .4);
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}
.deleteImg {
  position: absolute;
  right: 0;
  top: 0;
  display: none;
  width: 20px;
  height: 20px;
  font-size: 0;
  background: url(../img/delete.png) no-repeat top center/100%;
  z-index: 999;
  cursor: pointer;
}
.contraction {
  width: 300px;
  height: 80px;
  /* background-color: pink; */
  border: 1px solid #eee;
  display: flex;
  
  /* text-indent: 2em; */
  position: relative;
}
.contraction_img {
  width: 80px;
  height: 80px;
  /* background-color: aqua; */
}
.contraction_img img {
  width:100%;
  height: 100%;
}
.contraction_name {
  width: 150px;
  height: 80px;
  text-align: center;
  line-height: 80px;
}
.deletecon {
  width: 20px;
  height: 20px;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0;
  background: url(../img/delete.png) no-repeat top center/100%;;
}
</style>
