# layout布局

  <div>
    <TLayout class="layout">
      <TAside backgroundColor="yellow" class="layout-aside">
        aside
      </TAside>
      <TLayout>
<THeader backgroundColor="pink" class="layout-header">header</THeader>
<TFooter backgroundColor="green" class="layout-footer">footer</TFooter></TLayout>
      </TLayout>

```html
<TLayout class="layout">
      <TAside backgroundColor="yellow" class="layout-aside">
        aside
      </TAside>
      <TLayout><THeader backgroundColor="pink" class="layout-header">header</THeader>
      <TFooter backgroundColor="green" class="layout-footer">footer</TFooter></TLayout>
      </TLayout>
```

<TLayout class="layout">
     
 <THeader backgroundColor="pink">header</THeader>
 <TFooter backgroundColor="green">footer</TFooter>
      
</TLayout>

```html

<TLayout class="layout">
     
 <THeader backgroundColor="pink">header</THeader>
 <TFooter backgroundColor="green">footer</TFooter>
      
</TLayout>
```

  </div>

<style scoped lang="less">
.layout{
  margin: 10px 0;
  &-aside{
  width: 100px;
  height: 300px;
}
&-header{
  width: 300px;
  height: 64px;
}
&-footer{
  width: 300px;
  height: 236px;
}
}

</style>