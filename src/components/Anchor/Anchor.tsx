import React, { FC, useContext, useState, ReactNode, useRef } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";
import useScroll from "../../hooks/useScroll";

export type jumpObjType = {
  queryId: string;
  title: string;
  key: number;
}[];

export type AlignType = "start" | "center" | "end" | "nearest";

export interface AnchorProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** 锚点跳转的解析对象 */
  jumpObj?: jumpObjType;
  /** 垂直方向的锚点的对齐方向 */
  columnAlign?: AlignType;
  /** 水平方向的锚点的对齐方向 */
  rowAlign?: AlignType;
  /** 监听点击 */
  onClick?: () => void;
  /** 监听改变 */
  onChange?: () => void;
}

/**
 * Anchor 组件模板
 */
const Anchor: FC<AnchorProps> = (props) => {
  const {
    className,
    prefixCls: customizePrefixCls,
    style,
    jumpObj = [],
    columnAlign = "start",
    rowAlign = "nearest",
    onClick,
    onChange,
  } = props;
  const [ballTop, setBallTop] = useState(0);
  const [warpHeight, setWarpHeight] = useState(0);
  const [step, setStep] = useState(0);
  const [topList, setTopList] = useState<number[]>([]);
  const anchorRef = useRef<HTMLDivElement>(null);
  const { x, y } = useScroll()

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("anchor", customizePrefixCls);

  const cls = classNames(prefixCls, className, {});

  const handleBallposition = (index: number) => {
    let top = (warpHeight / jumpObj.length) * index;
    setBallTop(top);
    setStep(index);
  };
  const handleJump = (obj: jumpObjType[0], index: number) => {
    const { queryId = "", title = "" } = obj;
    if (queryId) {
      if (step !== index) onChange && onChange();
      handleBallposition(index);
      let jumpDOM = document.getElementById(queryId);
      jumpDOM &&
        jumpDOM.scrollIntoView({
          behavior: "smooth",
          block: columnAlign,
          inline: rowAlign,
        });
    }
    onClick && onClick();
  };

  React.useEffect(() => {
    if (anchorRef.current) {
      setWarpHeight(anchorRef.current?.offsetHeight);
    }
    let arr: number[] = []
    jumpObj.forEach(item => {
      let dom = document.getElementById(item.queryId)
      //@ts-ignore
      dom && arr.push(dom.offsetTop)
    })
    setTopList(arr)
  }, []);

  React.useEffect(() => {
    let len = topList.length
    for (let i = 0; i < len; i++) {
      console.log(topList[i]);
      console.log(y);

      //是否在页面尾部
      if (i === len - 1 && topList[len - 1] <= y) {
        handleBallposition(i);
      } else {
        if (i + 1 < len && topList[i] <= y && y <= topList[i + 1]) {
          handleBallposition(i);
        }
      }
      console.log(i);
    }
  }, [y])

  return (
    <div className={cls} style={style} ref={anchorRef}>
      <div
        className={`${prefixCls}-line`}
        style={{ height: warpHeight + "px" }}
      >
        <div
          className={`${prefixCls}-ballbox`}
          style={{
            top: ballTop + "px",
            height: warpHeight / jumpObj.length + "px",
          }}
        >
          <div className={`${prefixCls}-ball`}></div>
        </div>
      </div>
      <div className={`${prefixCls}-content`}>
        {jumpObj &&
          jumpObj.map((obj, index) => {
            return (
              <div
                key={obj.key}
                onClick={() => handleJump(obj, index)}
                className={`${prefixCls}-item`}
              >
                {obj.title}
              </div>
            );
          })}
      </div>
    </div>
  );
};

Anchor.defaultProps = {
  columnAlign: "start",
  rowAlign: "nearest",
  jumpObj: [],
};

export default Anchor;
