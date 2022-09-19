import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";
import Icon from "../Icon";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
export interface PanelProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** 头部标题 */
  header: string;
  /** key */
  keyId?: string;
  /** keyList */
  keyList?: string[];
  /** order */
  order?: number;
  /** chlidren总数量 */
  len?: number
  /** 改变的回调 */
  onChange?: (key: string[]) => void;
}

/**
 * Collapse 组件模板
 */
const Panel: FC<PanelProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, header, keyId, onChange, order, len, keyList } = props;
  const [expand, setExpand] = useState(false);

  React.useEffect(() => {
    if (keyList) {
      let exist = keyList?.some(item => {
        return item === keyId
      })
      console.log('defaultActiveKey', keyList);
      console.log('key', keyId);

      console.log("exist", exist);

      exist && setExpand(true)
    }
  }, [])

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("collapse-panel", customizePrefixCls);

  const cls = classNames(prefixCls, className, {});

  const expandClick = () => {
    setExpand(!expand)
  }
  return (
    <div className={cls} style={style}>
      <div onClick={expandClick} className={`${prefixCls}-header`} style={{ borderTop: order === 0 ? '1px solid #ddd' : '0px solid #ddd', borderRadius: order === 0 ? '5px 5px 0 0' : '' }}>
        <div>{header}</div>   <Icon icon={solid("angle-right")} size="1x" color="#4c4c4c"></Icon>
      </div>

      <div className={`${prefixCls}-content`} style={{
        borderRadius: order === len ? '0 0 5px 5px' : '',
        padding: expand ? '10px' : '0px'
      }}>
        {expand && children}
      </div>
    </div>
  );
};

Panel.defaultProps = {};

export default Panel;
