/** @jsxImportSource @emotion/react */
import React, { FC, useContext, useState, ReactNode } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";
import { DataNode } from "./type";
import Icon from "../Icon";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { css } from '@emotion/react'

export interface TreeProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** data */
  treeData?: DataNode[];
}

/**
 * Tree 树形控件
 */
const Tree: FC<TreeProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, treeData } = props;
  const [treeState, setTreeState] = useState(treeData);

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("tree", customizePrefixCls);

  const cls = classNames(prefixCls, className, {});

  const handleTreeExpand = (tree) => {
    let cloneTree = JSON.parse(JSON.stringify(treeState))
    console.log(JSON.stringify(tree.key));

    function findTreeExpand(cloneTree) {
      cloneTree.forEach((item: any, index: number) => {
        if (item.key === tree.key) {
          item.expand = !item.expand
          console.log(item.expand);
        }
        if (item.children) {
          findTreeExpand(item.children)
        }
      })
    }

    findTreeExpand(cloneTree)

    console.log(JSON.stringify(cloneTree));
    setTreeState(cloneTree)
  }

  const renderTree = (parent: DataNode[]) => {
    return (
      <>
        {
          //@ts-ignore
          parent.children && parent.children.map((child: DataNode) => {
            return (
              <div >
                <div style={{ marginLeft: `${child.key.length * 5 + 'px'}` }} key={child.key} >
                  {/* tree content */}
                  <Icon icon={solid('angle-right')} size='1x' onClick={() => handleTreeExpand(child)} color='#4c4c4c' className={`${prefixCls}-icon`} className={`${prefixCls}-icon`} css={css`
                    transform: ${child.expand ? 'rotate(90deg)' : ''};
                    transition: all .2s linear;
                  `}></Icon>{child.title}</div>
                {
                  //@ts-ignore
                  child.expand && renderTree(child)
                }
              </div>
            )
          })
        }
      </>
    )
  }

  return (
    <div className={cls} style={style}>
      < >
        {
          treeState && treeState.map((tree) => {
            return (
              <>
                <div style={{ display: 'flex', alignItems: 'center' }} onClick={() => handleTreeExpand(tree)}>
                  <Icon icon={solid('angle-right')} size='1x' color='#4c4c4c' className={`${prefixCls}-icon`} css={css`
                    transform: ${tree.expand ? 'rotate(90deg)' : ''};
                    transition: all .2s linear;
                  `}></Icon>
                  <div key={tree.key}> {tree.title} </div>
                </div>
                {
                  tree.expand && renderTree(tree)
                }
              </>
            )
          })
        }
      </>
    </div >
  );
};

Tree.defaultProps = {};

export default Tree;
