# dropdown下拉

<div class="container"> 
<t-dropdown>
     <span>下拉菜单<i class="iconfont icon-down"></i></span>
            <t-dropdown-item>专栏投稿</t-dropdown-item>
            <t-dropdown-item>音频投稿</t-dropdown-item>
            <t-dropdown-item>贴纸投稿</t-dropdown-item>
            <t-dropdown-item>视频投稿</t-dropdown-item>
            <t-dropdown-item>投稿管理</t-dropdown-item>
</t-dropdown>


<t-dropdown>
            <t-button type="primary">
                更多菜单<i class="iconfont icon-down"></i>
            </t-button>
            <t-dropdown-item>专栏投稿</t-dropdown-item>
            <t-dropdown-item>音频投稿</t-dropdown-item>
            <t-dropdown-item>贴纸投稿</t-dropdown-item>
            <t-dropdown-item>视频投稿</t-dropdown-item>
            <t-dropdown-item>投稿管理</t-dropdown-item>
 </t-dropdown>

<t-dropdown size="medium">
            <t-button type="primary" >
                更多菜单<i class="iconfont icon-down"></i>
            </t-button>
            <t-dropdown-item>专栏投稿</t-dropdown-item>
            <t-dropdown-item>音频投稿</t-dropdown-item>
            <t-dropdown-item>贴纸投稿</t-dropdown-item>
            <t-dropdown-item>视频投稿</t-dropdown-item>
            <t-dropdown-item>投稿管理</t-dropdown-item>
        </t-dropdown>


<t-dropdown size="small">
            <t-button type="primary">
                更多菜单<i class="iconfont icon-down"></i>
            </t-button>
            <t-dropdown-item>专栏投稿</t-dropdown-item>
            <t-dropdown-item>音频投稿</t-dropdown-item>
            <t-dropdown-item>贴纸投稿</t-dropdown-item>
            <t-dropdown-item>视频投稿</t-dropdown-item>
            <t-dropdown-item>投稿管理</t-dropdown-item>
        </t-dropdown>




<t-dropdown size="mini">
            <t-button type="primary">
                更多菜单<i class="iconfont icon-down"></i>
            </t-button>
            <t-dropdown-item>专栏投稿</t-dropdown-item>
            <t-dropdown-item>音频投稿</t-dropdown-item>
            <t-dropdown-item>贴纸投稿</t-dropdown-item>
            <t-dropdown-item>视频投稿</t-dropdown-item>
            <t-dropdown-item>投稿管理</t-dropdown-item>
        </t-dropdown>
    </div>
    
``` html
<t-dropdown size="small">
    <t-button type="primary"> 更多菜单<i class="iconfont icon-down"></i>
            </t-button>
     <t-dropdown-item>专栏投稿</t-dropdown-item>
      <t-dropdown-item>音频投稿</t-dropdown-item>
     <t-dropdown-item>贴纸投稿</t-dropdown-item>
      <t-dropdown-item>视频投稿</t-dropdown-item>
      <t-dropdown-item>投稿管理</t-dropdown-item>
</t-dropdown>
```

``` html
<t-dropdown size="mini">
   <t-button type="primary"> 更多菜单<i class="iconfont icon-down"></i>
</t-button>
    <t-dropdown-item>专栏投稿</t-dropdown-item>
    <t-dropdown-item>音频投稿</t-dropdown-item>
    <t-dropdown-item>贴纸投稿</t-dropdown-item>
    <t-dropdown-item>视频投稿</t-dropdown-item>
    <t-dropdown-item>投稿管理</t-dropdown-item>
</t-dropdown>
```


<style scoped>
.container{
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}
</style>