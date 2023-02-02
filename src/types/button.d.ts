import type { DefineComponent } from 'vue';
export declare const Button: DefineComponent<{
    /**
     * 按钮类型，可选值为 `default`、`primary`、`dashed`、`text`、`info`、`success`、`warning`、`error`或者不设置
     */
    type?: '' | 'default' | 'primary' | 'dashed' | 'text' | 'info' | 'success' | 'warning' | 'error';

    /**
     * 按钮大小，可选值为 `large`、`small`、`default` 或者不设置
     */
    size?: '' | 'large' | 'small' | 'default';

    /**
     * 点击时触发
     */
    onClick?: (event?: any) => any;

}>