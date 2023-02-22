# 快速开始
在这里将介绍如何在项目中使用TUI。

# 用法
## 如何引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。
### 完整引入
``` js
//示例代码
import TUI from "../packages/index";
import { createApp } from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'

createApp(App).use(router).use(TUI).mount('#app')
```

### 按需引入

```js
import { TButton } from 'TUI'
```