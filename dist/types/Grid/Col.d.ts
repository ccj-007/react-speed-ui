import React, { FC } from "react";
interface ColProps {
    span?: number;
    offset?: number;
    children?: React.ReactNode;
    className?: string;
}
declare const Col: FC<ColProps>;
export default Col;
