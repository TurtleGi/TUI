export { THeader } from './layout/header/index';
export { TFooter } from './layout/footer/index';
export { TAside } from './layout/aside/index';
export { TMain } from './layout/main/index';
export { TLayout } from './layout/index';
export { TGrid } from './grid/index';
export { TGridItem } from './grid/grid-item/index'
export { TList } from './list/index';
export { TListItem } from './list/list-item/index'
export { TTable } from './table/index'
export {TAvatar} from './avatar/index'
export {TProgress} from './progress/index'
export {TButton } from './button/index'
export {TButtonGroup } from './buttongroup/index'
export {TBreadCrumb} from './breadcrumb/index'
export {TBreadCrumbItem} from './breadcrumbitem/index'
export {TCheckBox} from './checkbox/index'
export {TCheckBoxGroup} from './checkboxgroup/index'
export {TDropDown} from './dropdown/index'
export { TDropDownItem } from './dropdownitem/index'
export {TForm} from './form/index'
export {TFormItem} from './formitem/index'
export {TIcon } from './icon/index'
export {TInput } from './input/index'
export {TMenu } from './menu/index'
export {TMenuItem} from './menuitem/index'
export {TOption} from './option/index'
export {TRadio } from './radio/index'
export {TRadioGroup} from './radiogroup/index'
export {TSelect} from './select/index'
export {TSwitch} from './switch/index'
export {TTimepick} from './timepick/index'
export {TUpload} from './upload/index'
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
    app.use(TBreadCrumb),
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
    app.use(TUpload),
    app.use(TTimepick),
    app.use(TUpload)
}
const TUI = {
    install
}
export { TButton,TButtonGroup,
    TBreadCrumbItem,TBreadCrumb,
    TCheckBox,TCheckBoxGroup,TDropDown,TDropDownItem,TForm,TFormItem,TIcon,TInput,TMenu,TMenuItem,TOption,TRadio,TRadioGroup
    ,TSelect,TUpload,TTimepick,TUpload
    ,THeader, TFooter, TAside, TMain,TLayout,TGrid,TGridItem,TList,TListItem,TTable,TAvatar,TProgress}

export default TUI;