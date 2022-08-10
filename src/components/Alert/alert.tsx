import React, { useContext } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";

export type AlertBaseProps = {
  /** 样式命名隔离 */
  prefixCls: string;
  /** 是否打开状态 */
  isOpen: boolean;
  /** 弹窗样式 */
  alertType: "success" | "primary" | "danger" | "warning";
  /** 标题 */
  title: string;
  /** 内容 */
  content: string;
  /** 自定义类名 */
  className: string;
  /** 弹窗内容 */
  children: React.ReactNode;
  /** 是否展示关闭图标 */
  closeAlert: Function;
};
export type AlertProps = Partial<AlertBaseProps>;

/**
 * Alert  弹窗组件
 */
const Alert: React.FC<AlertProps> = (props) => {
  const {
    isOpen,
    alertType,
    title,
    content,
    className,
    children,
    closeAlert,
    prefixCls: customizePrefixCls,
  } = props;
  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("alert", customizePrefixCls);

  const classes = classNames(prefixCls, className, {
    [`${prefixCls}-${alertType}`]: alertType,
    ["slide-in-blurred-top"]: isOpen,
  });

  React.useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        closeAlert && closeAlert();
      }, 1000);
    }
  }, [isOpen]);

  return (
    <>
      {isOpen ? (
        <div className={classes}>
          <div className={`${prefixCls}-maintitle`} data-testid="alert-title">
            {title}
          </div>
          <div data-testid="alert-content">{children || content}</div>
          <div
            onClick={() => closeAlert && closeAlert()}
            className={`${prefixCls}-close`}
          >
            X
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

Alert.defaultProps = {
  isOpen: false,
  alertType: "primary",
  title: "我是乌龟",
  content: "⚡我是雷电，我的速度飞快 ！！",
  className: "",
};

export default Alert;
