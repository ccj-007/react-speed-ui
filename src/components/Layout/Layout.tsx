import React from 'react';
import classNames from 'classnames';

export interface GeneratorProps {
  suffixCls: string;
  displayName: string;
  /** 标签名 */
  tagName: 'header' | 'footer' | 'main' | 'section';
}
export interface BasicProps extends React.HTMLAttributes<HTMLDivElement> {
  /** 样式隔离 */
  prefixCls?: string;
}
interface BasicPropsWithTagName extends BasicProps {
  tagName: 'header' | 'footer' | 'main' | 'section';
}

function generator({ suffixCls, tagName, displayName }: GeneratorProps) {
  return (BasicComponent: any) => {
    const Adapter = React.forwardRef<HTMLElement, BasicProps>((props, ref) => {
      return <BasicComponent ref={ref} prefixCls={suffixCls} tagName={tagName} {...props} />;
    });
    if (process.env.NODE_ENV !== 'production') {
      Adapter.displayName = displayName;
    }
    return Adapter;
  };
}

const Basic = React.forwardRef<HTMLElement, BasicPropsWithTagName>((props, ref) => {
  const { prefixCls, className, children, tagName, ...others } = props;
  const classString = classNames(prefixCls, className);

  return React.createElement(tagName, { className: classString, ...others, ref }, children);
});

const BasicLayout = React.forwardRef<HTMLElement, BasicPropsWithTagName>((props, ref) => {
  const { prefixCls, className, children, tagName: Tag, ...others } = props;
  const hasDOM = (content: string) => {
    return children && children instanceof Array && children.some(item => item.type.render.displayName === content);
  };
  setTimeout(() => {
    let content: HTMLDivElement | null = document.querySelector('.speed-content');
    let layout: HTMLDivElement | null = document.querySelector('.speed-layout');
    let sider: HTMLDivElement | null = document.querySelector('.speed-sider');
    if (hasDOM('Content') && hasDOM('Sider')) {
      if (content && layout && sider) {
        content.style.width = '70%';
        sider.style.width = '30%';
        layout.style.display = 'flex';
      }
    }
    if (hasDOM('Header') && hasDOM('Footer') && hasDOM('Content')) {
      if (sider && layout && content) {
        sider.style.float = 'left';
        sider.style.height = '100vh';
        layout.style.display = 'inline-block';
        layout.style.width = '70%';
      }
    }
  }, 0);

  const classString = classNames(prefixCls, className);

  return (
    <Tag ref={ref} className={classString} {...others}>
      {children}
    </Tag>
  );
});

const Layout = generator({
  suffixCls: 'speed-layout',
  tagName: 'section',
  displayName: 'Layout',
})(BasicLayout);

const Header = generator({
  suffixCls: 'speed-header',
  tagName: 'header',
  displayName: 'Header',
})(Basic);

const Footer = generator({
  suffixCls: 'speed-footer',
  tagName: 'footer',
  displayName: 'Footer',
})(Basic);

const Content = generator({
  suffixCls: 'speed-content',
  tagName: 'main',
  displayName: 'Content',
})(Basic);

const Sider = generator({
  suffixCls: 'speed-sider',
  tagName: 'main',
  displayName: 'Sider',
})(Basic);

export { Header, Footer, Content, Sider };

export default Layout;
