import React from "react";
import classNames from "classnames";
import './style.scss'

export type AlertBaseProps = {
  isOpen: boolean;
  alertType: "success" | "primary" | "danger" | "warning";
  title: string;
  content: string;
  className: string;
  children: React.ReactNode;
  closeAlert: Function;
  openAlert: Function;
};
export type AlertProps = Partial<AlertBaseProps>;

/**
 * 页面中点击某些交互弹出对应的弹窗
 * ### 引用方法
 *
 * ~~~js
 * import { Alert } from 'speed-ui'
 * ~~~
 */
const Alert: React.FC<AlertProps> = (props) => {
  const { isOpen, alertType, title, content, className, children, closeAlert } =
    props;

  const classes = classNames("alert", className, {
    [`alert-${alertType}`]: alertType,
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
          <div className="alert-maintitle" data-testid="alert-title">
            {title}
          </div>
          <div data-testid="alert-content">{children || content}</div>
          <div
            onClick={() => closeAlert && closeAlert()}
            className="alert-close"
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
