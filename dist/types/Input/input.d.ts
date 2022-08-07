import React, { InputHTMLAttributes } from "react";
declare type InputSize = "lg" | "sm";
export interface InputProps {
    size: InputSize;
    disabled: boolean;
    isPasswordInput: boolean;
    isNumberInput: boolean;
    placeholder: string;
    prefix: string;
    suffix: string;
    onChangeVal: Function;
    value: any;
    className: string;
    children: React.ReactNode;
    style: React.CSSProperties;
}
export declare type InputExternalProps = Omit<InputProps, "size">;
export declare type allInputProps = Partial<InputProps> & InputHTMLAttributes<HTMLInputElement>;
/**
 * ### 引用方法
 *
 * ~~~js
 * import { Input } from 'react-speed-ui'
 * ~~~
 */
declare const Input: React.FC<allInputProps>;
export default Input;
