import React, { FC, useRef, useState, useMemo } from "react";
import classNames from "classnames";

export interface AffixProps {
  /** 距离底部多少px固定 */
  offsetBottom?: number;
  /** 距离顶部多少px固定 */
  offsetTop?: number;
  /** 固定时的回调 */
  onChange?: (affixed: boolean) => void;
  /** 默认被固定的DOM */
  children: React.ReactNode;
}

/**
 * Affix 图钉组件
 */
const Affix: FC<AffixProps> = (props) => {
  const { offsetBottom = 0, offsetTop = 0, onChange, children } = props;
  const affixRef = useRef<HTMLDivElement>(null);
  const [eleTop,] = useState(offsetTop);
  const [eleBottom,] = useState(offsetBottom);
  const [affixed, setAffixed] = useState(false);

  let status = useMemo(() => {
    return eleTop > 0 ? "top" : "bottom";
  }, [eleTop, eleBottom]);

  const handleChange = (affixed: boolean) => {
    onChange && onChange(affixed);
  };

  React.useEffect(() => {
    const handleScroll = (e: Event) => {
      if (affixRef && affixRef.current) {
        const eleInfo = affixRef.current.getBoundingClientRect();
        console.log(eleInfo.y);

        const y = Math.abs(eleInfo.y); //元素到顶部的可视距离
        if (status === "top") {
          console.log("y", y, "eleTop", eleTop);
          if (y > eleTop) {
            setAffixed(false);
          }
          if (y <= eleTop && !affixed) {
            handleChange(true);
            setAffixed(true);
          }
        }
        if (status === "bottom") {
          if (
            window.innerHeight - eleBottom - affixRef.current.offsetHeight <= y &&
            !affixed
          ) {
            handleChange(true);
            setAffixed(true);
          } else {
            setAffixed(false);
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const classes = classNames("speed-affix", {
    [`speed-affix-top`]: eleTop > 0,
    [`speed-affix-bottom`]: eleBottom > 0,
  });

  const getAffixWarp = () => {
    if (children) {
      return React.createElement(
        "div",
        {
          ref: affixRef,
          ...props,
        },
        children
      );
    } else {
      return children;
    }
  };
  return (
    <div className={classes} style={{ top: eleTop, bottom: eleBottom }}>
      {getAffixWarp()}
    </div>
  );
};

Affix.defaultProps = {};

export default Affix;
