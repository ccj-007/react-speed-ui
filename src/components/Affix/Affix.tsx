import React, { FC } from "react";

export interface AffixProps {
  offsetBottom?: number,
  offsetTop?: number,
  onChange?: () => void,
  target?: HTMLElement,
  children: React.ReactNode
}

/**
 * Affix 图钉组件
 */
const Affix: FC<AffixProps> = (props) => {
  const { offsetBottom, offsetTop, onChange, target, children } = props

  const handleScroll = (e: Event) => {
    if (children) {
      console.log(children);
    }
  }
  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <>
      <div>{children}</div>
    </>
  );
};

Affix.defaultProps = {};

export default Affix;
