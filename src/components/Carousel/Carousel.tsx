/** @jsxImportSource @emotion/react */
import React, { FC, useContext, useState, ReactNode, useRef } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";
import Icon from '../Icon'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import useStateCallback from "../../hooks/useStateCallback";
import { css } from '@emotion/react'
import useInterval from '../../hooks/useInterval'

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

  const groupCls = classNames(`${prefixCls}-group`, `${prefixCls}-group-${dotPosition}`);


  const animationStyle = {
    animation: startAnimation ? 'fade-in 1s cubic-bezier(.39,.575,.565,1.000) both' : ''
  }

  useInterval(() => {
    if (autoplay && contentList) {
      if (imgId === contentList.length - 1) {
        setImgId(0)
      } else {
        setImgId(imgId + 1)
      }
    }
  }, 2000)

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
      return <img alt='' src={contentList[imgId].imgUrl} className={`${prefixCls}-imgs-item`} style={animationStyle} ref={carouselImgRef}></img>
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
    imgUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fgss0.baidu.com%2F9vo3dSag_xI4khGko9WTAnF6hhy%2Fzhidao%2Fpic%2Fitem%2F11385343fbf2b211827ce1cdc88065380dd78ee6.jpg&refer=http%3A%2F%2Fgss0.baidu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666797389&t=b4baa6d9f31506accc67f784dce14c54",
    id: 0
  }, {
    imgUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fitem%2F202003%2F18%2F20200318081321_lerlp.jpeg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666797308&t=daca309a8957c66f1bb8a7817623ce30",
    id: 1
  }, {
    imgUrl: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201902%2F01%2F20190201205420_oynyr.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1666797308&t=e4392944bc3c222c36918044dc310cad",
    id: 2
  }]
};

export default Carousel;
