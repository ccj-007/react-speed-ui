import React from "react";
export interface DividerProps {
    type?: "horizontal" | "vertical";
    orientation?: "left" | "right" | "center";
    orientationMargin?: string | number;
    className?: string;
    children?: React.ReactNode;
    dashed?: boolean;
    style?: React.CSSProperties;
    plain?: boolean;
}
declare const Divider: React.FC<DividerProps>;
export default Divider;
