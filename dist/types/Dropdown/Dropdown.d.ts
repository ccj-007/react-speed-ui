import React, { FC } from "react";
export declare type PlacementType = "b" | "t" | "l" | "r";
export declare type DropmenuType = {
    key: string | number;
    label: React.ReactElement;
};
export interface DropdownProps {
    menu: DropmenuType[];
    disabled?: boolean;
    className?: string;
    childClassName?: string;
    trigger?: "click" | "hover";
    placement?: PlacementType;
    onClickChange?: (subMenu: any) => void;
    children?: React.ReactNode;
}
declare const Dropdown: FC<DropdownProps>;
export default Dropdown;
