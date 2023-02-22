// export * from './components'
// import * as components from './components'
// const API = {
//     ...components,
// };

// export default API;
import TBreadCrumb from '../packages/components/breadcrumb/index'
import TBreadCrumbItem from '../packages/components/breadcrumbitem/index'
import TCheckBox from '../packages/components/checkbox/index'
import TCheckBoxGroup from '../packages/components/checkboxgroup/index'
import TDropDown from '../packages/components/dropdown/index'
import TDropDownItem from '../packages/components/dropdownitem/index'
import TForm from '../packages/components/form/index'
import TFormItem from '../packages/components/formitem/index'
import TIcon from '../packages/components/icon/index'
import TInput from '../packages/components/input/index'
import TMenu from '../packages/components/menu/index'
import TMenuItem from '../packages/components/menuitem/index'
import TOption from '../packages/components/option/index'
import TRadio from '../packages/components/radio/index'
import TRadioGroup from '../packages/components/radiogroup/index'
import TSelect from '../packages/components/select/index'
import TSwitch from '../packages/components/switch/index'
import TTimepick from '../packages/components/timepick/index'
import TUpload from '../packages/components/upload/index'
import TButton from '../packages/components/button/index.ts'
import TButtonGroup from '../packages/components/buttongroup/index.ts'
import THeader from '../packages/components/layout/header/index';
import TAside from '../packages/components/layout/aside/index';
import TMain from '../packages/components/layout/main/index';
import TFooter from '../packages/components/layout/footer/index';
import TLayout from '../packages/components/layout/index';
import TGrid from '../packages/components/grid/index';
import TGridItem from '../packages/components/grid/grid-item/index';
import TList from '../packages/components/list/index';
import TListItem from '../packages/components/list/list-item/index';
import TTable from '../packages/components/table/index';

import TAvatar from '../packages/components/avatar/index'
import TProgress from '../packages/components/progress/index'
const install = app => {
    app.use(THeader),
        app.use(TFooter),
        app.use(TAside),
        app.use(TMain),
        app.use(TLayout),
        app.use(TGrid),
        app.use(TGridItem),
        app.use(TList),
        app.use(TListItem),
        app.use(TTable),
        app.use(TAvatar),
        app.use(TProgress),
        app.use(TButton),
        app.use(TButtonGroup),
        app.use(TBreadCrumbItem),
        app.use(TCheckBox),
        app.use(TCheckBoxGroup),
        app.use(TDropDown),
        app.use(TDropDownItem),
        app.use(TForm),
        app.use(TFormItem),
        app.use(TIcon),
        app.use(TInput),
        app.use(TMenu),
        app.use(TMenuItem),
        app.use(TOption),
        app.use(TRadio),
        app.use(TRadioGroup),
        app.use(TSelect),
        app.use(TSwitch),
        app.use(TUpload),
        app.use(TTimepick),
        app.use(TUpload)

}
const TUI = {
    install
}
export {
    TBreadCrumbItem, TBreadCrumb,
    TCheckBox, TCheckBoxGroup, TDropDown, TDropDownItem, TForm, TFormItem, TIcon, TInput, TMenu, TMenuItem, TOption, TRadio, TRadioGroup
    , TSwitch,TSelect, TUpload, TTimepick, TButton, TButtonGroup, THeader, TFooter, TAside, TMain, TLayout, TGrid, TGridItem, TList, TListItem, TTable,
    TAvatar, TProgress
}
export default TUI;