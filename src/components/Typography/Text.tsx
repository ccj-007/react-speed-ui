import React, { AnchorHTMLAttributes } from "react";
import classNames from "classnames";

export type TextThemeType =
  | "default"
  | "secondary"
  | "success"
  | "warning"
  | "danger";

export interface TextProps
  extends Omit<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  "type" | "className" | "children" | "href"
  > {
  /** 类型 */
  type?: TextThemeType;
  /** 禁用 */
  disabled?: boolean;
  /** 标记 */
  mark?: boolean;
  /** 代码风格 */
  code?: boolean;
  /** 键盘风格 */
  keyboard?: boolean;
  /** 下划线 */
  underline?: boolean;
  /** 标记 */
  deleted?: boolean;
  /** 强调 */
  strong?: boolean;
  /** 斜体 */
  italic?: boolean;
  /** 链接 */
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

export type TextPartProps = Partial<TextProps>;

/**
 * Text  排版文本组件
 */
const Text: React.FC<TextPartProps> = (props) => {
  const {
    type,
    disabled,
    mark,
    code,
    keyboard,
    underline,
    strong,
    deleted,
    italic,
    children,
    className,
    href,
    ...restProps
  } = props;

  const classes = classNames("text", className, {
    [`text-${type}`]: type,
    [`text-mark`]: mark,
    [`text-code`]: code,
    [`text-keyboard`]: keyboard,
    [`text-underline`]: underline,
    [`text-strong`]: strong,
    [`text-deleted`]: deleted,
    [`text-italic`]: italic,
    [`text-href`]: href,
    [`disabled`]: disabled,
  });
  return (
    <>
      {href ? (
        <a className={classes} href={href} {...restProps}>
          {children}
        </a>
      ) : (
        <span className={classes} {...restProps}>
          {children}
        </span>
      )}
    </>
  );
};

Text.defaultProps = {
  type: "default",
};

export default Text;
