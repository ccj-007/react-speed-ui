import { FC, ReactElement } from "react";
import { InputExternalProps } from "../Input/input";
interface AutoItemType {
    value: string;
}
declare type AutoItemProps<T = {}> = AutoItemType & T;
export interface AutoCompleteProps extends InputExternalProps {
    fetchSuggestions: (str: string) => AutoItemProps[] | Promise<any[]>;
    onSelect?: (item: AutoItemProps) => void;
    renderOptions?: (item: AutoItemProps) => ReactElement;
}
declare const AutoComplete: FC<AutoCompleteProps>;
export default AutoComplete;
