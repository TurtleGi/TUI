# grid
  <div>
    <TGrid :colWidth="100" class="grid">
      <TGridItem>123</TGridItem>
      <TGridItem>123</TGridItem>
      <TGridItem>123</TGridItem>
      <TGridItem>123</TGridItem>
      <TGridItem>123</TGridItem>
      <TGridItem>123</TGridItem>
    </TGrid>

```html
    <TGrid :colWidth="100" class="grid">
      <TGridItem>123</TGridItem>
      <TGridItem>123</TGridItem>
      <TGridItem>123</TGridItem>
      <TGridItem>123</TGridItem>
      <TGridItem>123</TGridItem>
      <TGridItem>123</TGridItem>
    </TGrid>
```
<TGrid :isWidthSame="false" class="grid" :isBorder="false">
      <TGridItem :isBorder="false">123</TGridItem>
      <TGridItem :isBorder="false">123</TGridItem>
    </TGrid>
  </div>
  
```html
    <TGrid :isWidthSame="false" class="grid" :isBorder="false">
      <TGridItem :isBorder="false">123</TGridItem>
      <TGridItem :isBorder="false">123</TGridItem>
    </TGrid>
```

<style scoped>
.grid{
    margin: 10px 0;
}
</style>