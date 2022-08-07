import React from "react";
export declare type AlertBaseProps = {
    isOpen: boolean;
    alertType: "success" | "primary" | "danger" | "warning";
    title: string;
    content: string;
    className: string;
    children: React.ReactNode;
    closeAlert: Function;
    openAlert: Function;
};
export declare type AlertProps = Partial<AlertBaseProps>;
/**
 * 页面中点击某些交互弹出对应的弹窗
 * ### 引用方法
 *
 * ~~~js
 * import { Alert } from 'speed-ui'
 * ~~~
 */
declare const Alert: React.FC<AlertProps>;
export default Alert;
