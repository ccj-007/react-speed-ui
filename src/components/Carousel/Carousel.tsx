/** @jsxImportSource @emotion/react */
import React, { FC, useContext, useState, ReactNode, useRef } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";
import Icon from '../Icon'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import useStateCallback from "../../hooks/useStateCallback";
import { css } from '@emotion/react'

type CarouselContentType = {
  imgUrl: string,
  id: number,
}

export interface CarouselProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 容器类名 */
  className?: string;
  /** 列表 */
  contentList?: CarouselContentType[];
  /** id */
  defaultId?: number;
  /** 是否自动播放 */
  autoplay?: boolean;
  /** 切换组的位置 */
  dotPosition?: 'top' | 'bottom' | 'left' | 'right';
  /** 是否显示切换组 */
  dots?: boolean;
  /** 切换的回调 */
  onChange?: () => void;
  /** 切换到下一面板 */
  next?: () => void;
  /** 切换到上一面板 */
  prev?: () => void;
}


/**
 * Carousel 轮播图
 */
const Carousel: FC<CarouselProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, contentList, defaultId = 0, autoplay, dotPosition, dots, onChange, next, prev } = props;
  const [imgId, setImgId] = useStateCallback(defaultId);
  const [startAnimation, setStartAnimation] = useState(false);
  const [first, setFirst] = useState(true);
  const carouselImgRef = useRef<any>(null)

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("carousel", customizePrefixCls);

  const cls = classNames(prefixCls, className, {});

  const groupCls = classNames(`${prefixCls}-group`, {
    [`${prefixCls}-group-top`]: dotPosition === 'top',
    [`${prefixCls}-group-bottom`]: dotPosition === 'bottom',
    [`${prefixCls}-group-left`]: dotPosition === 'left',
    [`${prefixCls}-group-right`]: dotPosition === 'right',
  });


  const animationStyle = {
    animation: startAnimation ? 'fade-in 1s cubic-bezier(.39,.575,.565,1.000) both' : ''
  }

  const handleNext = () => {
    first && setFirst(false)
    if (contentList && imgId < contentList.length - 1) {
      setImgId(imgId + 1)
      next && next()
    } else {
      setImgId(0)
    }
  }

  const handlePrev = () => {
    first && setFirst(false)
    if (imgId > 0) {
      setImgId(imgId - 1)
      prev && prev()
    } else {
      contentList && setImgId(contentList.length - 1)
    }
  }

  const handleToggle = (index: number) => {
    setImgId(index)
  }

  React.useEffect(() => {
    if (carouselImgRef.current) {
      carouselImgRef.current.addEventListener('animationend', () => {
        setStartAnimation(false)
      }, false)
    }

  }, [])

  React.useEffect(() => {
    if (!first) {
      setStartAnimation(true)
      onChange && onChange()
    }
  }, [imgId])
  const renderContentFn = () => {
    if (contentList && imgId != null && imgId >= 0) {
      return <img src={contentList[imgId].imgUrl} className={`${prefixCls}-imgs-item`} style={animationStyle} ref={carouselImgRef}></img>
    } else {
      return <></>
    }
  }
  return (
    <div className={cls} style={style}>
      <Icon className={`${prefixCls}-arrowl ${prefixCls}-arrow`} icon={solid('angle-left')} size='2x' color='#4c4c4c' onClick={handlePrev}></Icon>

      <div className={`${prefixCls}-imgs`}>
        {/* {
          contentList?.map(img => {
            return <img src={img.imgUrl} key={img.id} className={`${prefixCls}-imgs-item`}></img>
          })
        } */}
        {
          renderContentFn()
        }
      </div>

      {/* 切换组 */}
      {
        dots && <div className={groupCls}>
          {
            contentList?.map((item, index) => {
              return <div onClick={() => handleToggle(index)} className={`${prefixCls}-cir`} key={item.id} css={css`
              background: ${item.id === imgId ? '#fff' : '#aaaaaa8d'} ;
            `}></div>
            })
          }
        </div>
      }

      <Icon className={`${prefixCls}-arrowr ${prefixCls}-arrow`} icon={solid('angle-right')} size='2x' color='#4c4c4c' onClick={handleNext}></Icon>
    </div>
  );
};

Carousel.defaultProps = {
  dots: true,
  defaultId: 0,
  dotPosition: 'bottom',
  contentList: [{
    imgUrl: "https://img2.baidu.com/it/u=2902289707,1456932409&fm=253&fmt=auto&app=138&f=JPEG?w=456&h=500",
    id: 0
  }, {
    imgUrl: "https://img0.baidu.com/it/u=387490922,3684765776&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=889",
    id: 1
  }, {
    imgUrl: "https://img2.baidu.com/it/u=1487379787,1415708977&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=1082",
    id: 2
  }]
};

export default Carousel;
