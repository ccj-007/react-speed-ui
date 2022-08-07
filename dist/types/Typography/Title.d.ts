import React from "react";
export interface TitleProps {
    level?: 1 | 2 | 3 | 4 | 5 | 6;
    children?: React.ReactNode;
}
declare const Title: React.FC<TitleProps>;
export default Title;
