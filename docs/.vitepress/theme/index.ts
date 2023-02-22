 
import DefaultTheme from 'vitepress/theme'
import TUI from '../../../packages/index'

import type { Theme } from 'vitepress'

const define = <T>(value: T): T => value
export default define<Theme>({
  ...DefaultTheme, // 此处采用了默认主题，可以替换为自定义的主题
  NotFound: DefaultTheme.NotFound,
  enhanceApp: ({ app, router, siteData }) => {
    app.use(TUI); // 一些组件或库，来增加功能
    console.log(router);
    console.log(siteData)
  },
}) 


