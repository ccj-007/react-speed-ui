import React, {
  ChangeEvent,
  FC,
  useState,
  useContext,
  ReactElement,
  useEffect,
  KeyboardEvent,
  useRef,
} from "react";
import classNames from "classnames";
import Input, { InputExternalProps } from "../Input/Input";
import Icon from "../Icon/Icon";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import useDebounce from "../../hooks/useDebounce";
import useClickOutside from "../../hooks/useClickOutside";
import { ConfigContext } from "../Config-Provider/ConfigProvider";

interface AutoItemType {
  value: string;
}
type AutoItemProps<T = {}> = AutoItemType & T;

export interface AutoCompleteProps extends InputExternalProps {
  fetchSuggestions: (str: string) => AutoItemProps[] | Promise<any[]>;
  onSelect?: (item: AutoItemProps) => void;
  /* 自定义渲染 */
  renderOptions?: (item: AutoItemProps) => ReactElement;
  prefixCls?: string;
  width?: number;
}

/**
 * AutoComplete  自动补全input组件
 */
const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const {
    fetchSuggestions,
    onSelect,
    value,
    renderOptions,
    prefixCls: customizePrefixCls,
    width = 300,
    ...restProps
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("autoComplete", customizePrefixCls);

  const componentRef = useRef<HTMLDivElement>(null);

  const [inputValue, setInputValue] = useState<string>(value);
  const [suggestions, setSuggestions] = useState<AutoItemProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const debounceVal = useDebounce(inputValue, 500);
  const [highlightIndex, setHighlightIndex] = useState(-1);
  // eslint-disable-next-line
  const [showDropdown, setShowDropdown] = useState(false);
  const triggerSearch = useRef(false);

  useClickOutside(componentRef, () => {
    setSuggestions([]);
  });

  useEffect(() => {
    if (debounceVal && triggerSearch.current) {
      setSuggestions([]);

      //获取建议的列表
      const results = fetchSuggestions(value);
      if (results instanceof Promise) {
        setLoading(true);
        results.then((data) => {
          setLoading(false);
          setSuggestions(data);
          if (data.length > 0) {
            setShowDropdown(true);
          }
        });
      } else {
        setSuggestions(results);
        setShowDropdown(true);
        if (results.length > 0) {
          setShowDropdown(true);
        }
      }
    } else {
      setShowDropdown(false);
    }
    setHighlightIndex(-1);
  }, [debounceVal]);
  const highlight = (index: number) => {
    if (index < 0) index = 0;
    if (index >= suggestions.length) {
      index = suggestions.length - 1;
    }
    setHighlightIndex(index);
  };
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    switch (e.keyCode) {
      case 13:
        if (suggestions[highlightIndex]) {
          handleSelect(suggestions[highlightIndex]);
        }
        break;
      case 38:
        highlight(highlightIndex - 1);
        break;
      case 40:
        highlight(highlightIndex + 1);
        break;
      case 27:
        setShowDropdown(false);
        break;
      default:
        break;
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.trim();
    setInputValue(value);
    triggerSearch.current = true;
  };
  const handleSelect = (item: AutoItemProps) => {
    setSuggestions([]);
    setInputValue(item.value);
    if (onSelect) {
      onSelect(item);
    }
    triggerSearch.current = false;
  };

  //自定义渲染
  const renderTpl = (item: AutoItemProps) => {
    return renderOptions ? renderOptions(item) : item.value;
  };

  const generateDropdown = () => {
    return (
      <ul>
        {suggestions.map((item, index) => {
          const cnames = classNames(`${prefixCls}-suggestion-item`, {
            "is-active": index === highlightIndex,
          });

          return (
            <li
              key={index}
              className={cnames}
              onClick={() => handleSelect(item)}
            >
              {/* 这里需要做自定义渲染 */}
              {renderTpl(item)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <div className={prefixCls}>
      <Input
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...restProps}
        style={{ width: width + "px" }}
      />
      {loading && (
        <ul>
          <Icon icon={solid("spinner")} spin></Icon>
        </ul>
      )}
      <div
        className={suggestions.length > 0 ? `${prefixCls}-suggestion-list` : ""}
        style={{ width: width + "px" }}
      >
        {suggestions.length > 0 && generateDropdown()}
      </div>
    </div>
  );
};

export default AutoComplete;
