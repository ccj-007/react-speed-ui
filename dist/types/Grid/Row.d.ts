import React, { FC } from "react";
interface RowProps {
    span?: number;
    gutter?: number;
    offset?: number;
    children?: React.ReactNode;
    className?: string;
}
export declare const GutterContext: React.Context<number>;
declare const Row: FC<RowProps>;
export default Row;
