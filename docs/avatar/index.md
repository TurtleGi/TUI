# Avatar头像
<script setup lang="ts">
import { ref } from 'vue'
const color ='pink'
const url = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fci.xiaohongshu.com%2Ffde1110e-3c00-d813-c525-cd504ab6231c%3FimageView2%2F2%2Fw%2F1080%2Fformat%2Fjpg&refer=http%3A%2F%2Fci.xiaohongshu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1679570498&t=32c90e4d078b548161a520bb7908379f'
</script>


  <div>
 <t-grid :colWidth="130"> <t-avatar size="large" type="circle" :url="url"></t-avatar>
 <t-avatar size="large"  :url="url"></t-avatar>
 <t-avatar size="small" type="circle" :url="url"></t-avatar>
 <t-avatar :url="url"></t-avatar>
</t-grid>

  </div>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>



``` html
 <t-grid :colWidth="130"> <t-avatar size="large" type="circle" :url="url"></t-avatar>
 <t-avatar size="large"  :url="url"></t-avatar>
 <t-avatar size="small" type="circle" :url="url"></t-avatar>
 <t-avatar :url="url"></t-avatar>
</t-grid>
```