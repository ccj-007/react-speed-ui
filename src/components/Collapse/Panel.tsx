import React, { FC, useContext, useState, ReactNode, RefObject, useRef } from 'react';
import { ConfigContext } from '../Config-Provider/ConfigProvider';
import classNames from 'classnames';
import Icon from '../Icon';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';
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
  len?: number;
  /** accordion */
  accordion?: boolean;
  /** singleId */
  singleId?: string;
  /** handleAccordion */
  handleAccordion?: (id: string) => void;
  /** 改变的回调 */
  onChange?: (key: string) => void;
}

/**
 * Collapse 组件模板
 */
const Panel: FC<PanelProps> = props => {
  const {
    children,
    className,
    prefixCls: customizePrefixCls,
    style,
    header,
    keyId,
    onChange,
    order,
    len,
    keyList,
    accordion,
    singleId,
    handleAccordion,
  } = props;
  const [expand, setExpand] = useState(false);

  const contentRef = useRef() as RefObject<HTMLDivElement>;
  React.useEffect(() => {
    if (keyList) {
      let exist = keyList?.some(item => {
        return item === keyId;
      });

      exist && setExpand(true);
    }
  }, []);

  React.useEffect(() => {
    if (singleId !== keyId) {
      setExpand(false);
    }
  }, [singleId]);

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls('collapse-panel', customizePrefixCls);

  const cls = classNames(prefixCls, className, {});

  const expandClick = () => {
    keyId && onChange && onChange(keyId);
    accordion && handleAccordion && keyId && handleAccordion(keyId);
    setExpand(!expand);
  };
  return (
    <div className={cls} style={style}>
      <div onClick={expandClick} className={`${prefixCls}-header`} style={{}}>
        <div>{header}</div> <Icon icon={solid('angle-right')} size='1x' color='#4c4c4c'></Icon>
      </div>
      <div
        className={`${prefixCls}-content`}
        ref={contentRef}
        style={{
          height: expand ? '100px' : '0',
        }}
      >
        <div style={{ padding: '10px' }}>{children}</div>
      </div>
    </div>
  );
};

Panel.defaultProps = {};

export default Panel;
