import React, { AnchorHTMLAttributes } from "react";
export declare type TextThemeType = "default" | "secondary" | "success" | "warning" | "danger";
export interface TextProps extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "type" | "className" | "children" | "href"> {
    type?: TextThemeType;
    disabled?: boolean;
    mark?: boolean;
    code?: boolean;
    keyboard?: boolean;
    underline?: boolean;
    deleted?: boolean;
    strong?: boolean;
    italic?: boolean;
    href?: string;
    className?: string;
    children?: React.ReactNode;
}
export declare type TextPartProps = Partial<TextProps>;
declare const Text: React.FC<TextPartProps>;
export default Text;
