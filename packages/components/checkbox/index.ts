import Checkbox from "./src/index.vue"
import  type{ App, Plugin } from "vue";

type SFCWithInstall<T> = T&Plugin

const withInstall = <T>(comp:T) =>{ //注册icon组件
  (comp as SFCWithInstall<T>).install = function
  (app:App){
    app.component((comp as any).name,comp as SFCWithInstall<T>)
  }
  return comp as SFCWithInstall<T>
}
const TCheckbox = withInstall(Checkbox)
export default TCheckbox
