/** @jsxImportSource @emotion/react */
import React, { FC, useContext, useState, ReactNode, ChangeEvent } from "react";
import { ConfigContext } from "../Config-Provider/ConfigProvider";
import classNames from "classnames";
import { DataNode } from "./type";
import Icon from "../Icon";
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'
import { css } from '@emotion/react'
import Input from "../Input";

export interface TreeProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** 每一项的类名 */
  itemClass?: string;
  /** data */
  treeData?: DataNode[];
  /** 点击复选框 */
  disabled?: boolean;
  /** 默认是否展示全部 */
  defaultExpandAll?: boolean;
  /** 展示checkbox */
  showCheckBox?: boolean;
  /** 展开时的回调 */
  onExpand?: (item: DataNode) => void;
  /** 点击复选框 */
  onCheck?: (item: DataNode) => void;
  /** 点击当前项 */
  onClick?: (item: DataNode) => void;
}

/**
 * Tree 树形控件
 */
const Tree: FC<TreeProps> = (props) => {
  const { children, className, prefixCls: customizePrefixCls, style, treeData, itemClass, disabled, onExpand, defaultExpandAll, showCheckBox, onCheck, onclick } = props;
  const [treeState, setTreeState] = useState(treeData);

  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls("tree", customizePrefixCls);

  const cls = classNames(prefixCls, className, {});

  const itemCls = classNames(`${prefixCls}-item`, itemClass, {
    [`${prefixCls}-disabled`]: disabled
  });

  const handleTreeExpand = (tree: DataNode) => {
    if (disabled) return
    let cloneTree = JSON.parse(JSON.stringify(treeState))

    function findTreeExpand(cloneTree: any[]) {
      cloneTree.forEach((item: any, index: number) => {
        if (item.key === tree.key) {
          item.expand = !item.expand
          console.log(item.expand);
          onExpand && onExpand(item)
        }
        if (item.children) {
          findTreeExpand(item.children)
        }
      })
    }
    findTreeExpand(cloneTree)
    setTreeState(cloneTree)
  }

  const handleDefaultAllExpand = (status: boolean) => {
    let cloneTree = JSON.parse(JSON.stringify(treeState))
    function findTreeExpand(cloneTree: any[]) {
      cloneTree.forEach((item: any) => {
        item.expand = status
        if (item.children) {
          findTreeExpand(item.children)
        }
      })
    }
    findTreeExpand(cloneTree)
    setTreeState(cloneTree)
  }

  const onChangeCheckTreeNode = (e: ChangeEvent<HTMLInputElement>, child: DataNode) => {
    onCheck && onCheck(child)
  }

  const clickTreeNode = (child: DataNode) => {
    onClick && onclick(child)
  }

  React.useEffect(() => {
    if (defaultExpandAll) {
      handleDefaultAllExpand(true)
    }
  }, [])

  const renderTreeItem = (child: DataNode) => {
    return (
      <div style={{ paddingLeft: `${child.key.length * 5 + 'px'}` }} key={child.key} className={itemCls} onClick={(child) => clickTreeNode(child)}>
        {/* tree content */}
        <Icon icon={solid('angle-right')} size='1x' onClick={() => handleTreeExpand(child)} color='#4c4c4c' className={`${prefixCls}-icon`} css={css`
      transform: ${child.expand ? 'rotate(90deg)' : ''};
      transition: all .2s linear;
    `}></Icon>
        {showCheckBox && <input type='checkbox' onChange={(e) => onChangeCheckTreeNode(e, child)} className={`${prefixCls}-check`}></input>}
        {child.title}</div>
    )
  }
  const renderTree = (parent: DataNode) => {
    return (
      parent.children && parent.children.map((child: DataNode) => {
        return (
          <div >
            {
              renderTreeItem(child)
            }
            {
              child.expand && renderTree(child)
            }
          </div>
        )
      })
    )
  }

  return (
    <div className={cls} style={style}>
      < >
        {
          treeState && treeState.map((tree) => {
            return (
              <>
                {
                  renderTreeItem(tree)
                }
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

Tree.defaultProps = {
  disabled: false,
  showCheckBox: false
};

export default Tree;
