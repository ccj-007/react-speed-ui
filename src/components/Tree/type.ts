import * as React from 'react';
export interface BasicDataNode {
    checkable?: boolean;
    disabled?: boolean;
    disableCheckbox?: boolean;
    isLeaf?: boolean;
    selectable?: boolean;

    title: string,
    className?: string;
    style?: React.CSSProperties;
    key: Key
    expand: boolean
}

export declare type FieldDataNode<T, ChildFieldName extends string = 'children'> = BasicDataNode & T & Partial<Record<ChildFieldName, FieldDataNode<T, ChildFieldName>[]>>;
export declare type DataNode = FieldDataNode<{
    key: string | number;
    title?: React.ReactNode | ((data: DataNode) => React.ReactNode);
    expand: boolean
}>;

export declare type Key = string | number;
