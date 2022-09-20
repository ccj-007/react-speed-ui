import React, { FC, useContext, useState, ReactNode, RefObject, useEffect, useMemo } from 'react';
import { ConfigContext } from '../Config-Provider/ConfigProvider';
import classNames from 'classnames';
import { Input, Transition, Icon } from '../index';
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";

export interface CascaderProps {
  /** 样式命名隔离 */
  prefixCls?: string;
  /** 组件子节点 */
  children?: ReactNode;
  /** 容器内联样式 */
  style?: React.CSSProperties;
  /** 组件类名 */
  className?: string;
  /** 数据项 */
  options?: any;
  /** placeholder */
  placeholder?: string;
  /** 激活item的样式 */
  activeStyles?: React.CSSProperties;
  /** 激活item的样式 */
  iconActiveColor?: string;
  /** 改变时的回调 */
  onChange?: (valList: any[]) => void;
  /** 清理的回调 */
  onClear?: () => void;
}

/**
 * Cascader 级联选择框
 */
const Cascader: FC<CascaderProps> = props => {
  const { children, className, prefixCls: customizePrefixCls, style, options, placeholder, activeStyles, iconActiveColor = '$52c41a', onChange, onClear, ...restProps } = props;
  type optionsType = typeof options;

  const [visible, setVisible] = useState(false);
  const [levels, setLevels] = useState<number[]>([]);
  const [optionsWarp, setOptionsWarp] = useState<optionsType>(options);
  const [idList, setIdList] = useState<number[]>([]);
  const [showCloseIcon, setShowCloseIcon] = useState<boolean>(false);
  const [inputRef, setInputRef] = useState<RefObject<HTMLInputElement>>();
  const { getPrefixCls } = useContext(ConfigContext);
  let prefixCls = getPrefixCls('cascader', customizePrefixCls);

  const cls = classNames(prefixCls, className, {});
  const getActiveStyles = (node: any) => {
    let activeStyle = {
      color: '#52c41a',
      background: '#f8f9fa',
      ...activeStyles
    }
    return node.isClicked ? activeStyle : {}
  };

  useEffect(() => {
    if (inputRef) {
      document.addEventListener('click', listener);
    }
    return () => {
      document.removeEventListener('click', listener);
    };
  }, [inputRef]);

  //将所有选中状态清除
  const cancelAllClicked = (clearNode: any) => {
    function addNodeProperty(nodes: any) {
      nodes.forEach((node: any) => {
        node.isClicked = false
        if (node.children) {
          addNodeProperty(node.children)
        }
      })
    }
    addNodeProperty(clearNode)
    return clearNode
  }

  useEffect(() => {
    let level = 0
    let cloneOptions = JSON.parse(JSON.stringify(optionsWarp))
    function addNodeProperty(nodes: any) {
      let findNode = nodes[idList[level]]
      if (findNode) {
        findNode.isClicked = true
        if (findNode.children) {
          level++
          addNodeProperty(findNode.children)
        }
      }
    }
    if (idList.length) {
      let clearOptions = cancelAllClicked(cloneOptions)  //清除click
      addNodeProperty(cloneOptions)
      setOptionsWarp(clearOptions)
    }
  }, [idList]);

  // 对options做层包裹
  useEffect(() => {
    let cloneOptions = JSON.parse(JSON.stringify(options))
    function addNodeProperty(nodes: any) {
      nodes.forEach((node: any) => {
        node.isClicked = false
        if (node.children) {
          addNodeProperty(node.children)
        }
      })
    }
    addNodeProperty(cloneOptions)
    setOptionsWarp(cloneOptions)
  }, [])

  // 最深节点的层级数
  let maxLimit = useMemo(() => {
    let max = 0
    let maxList: number[] = []

    function getChildNode(childNode: any) {
      childNode.forEach((option: any) => {
        if (option.children) {
          max++
          getChildNode(option.children)
        } else {
          maxList.push(max)
          max = 0
        }
      })
    }
    getChildNode(optionsWarp)

    return Math.max(...maxList)
  }, [optionsWarp])


  // 根据idList获取对应的所有文本
  const pathText = useMemo(() => {
    if (!idList.length) return ''
    let textList: optionsType = []
    let level = 0
    function getChildNode(childNode: any) {
      if (idList.length >= level) {
        let pathNode = childNode[idList[level]]

        if (pathNode && pathNode.value) {
          let text = pathNode.value
          textList.push(text)
          if (pathNode && pathNode.children) {
            level++
            getChildNode(pathNode.children)
          }
        }
      }
    }

    getChildNode(optionsWarp)
    console.log("textList", textList);
    let cutTextList = textList.slice(0, levels.length)
    setShowCloseIcon(true)
    return cutTextList.join('/')
  }, [idList])

  React.useEffect(() => {
    setShowCloseIcon(!!pathText)
    onChange && onChange(pathText)
  }, [pathText])

  const handleClick = () => {
    if (levels.length === 0) {
      setLevels([...levels, 0])
    }
    setVisible(true);
  };

  const handleClear = () => {
    onClear && onClear()
    setLevels([])
    setIdList([])
    setShowCloseIcon(false)
    setOptionsWarp(cancelAllClicked(JSON.parse(JSON.stringify(optionsWarp))))  //clear
  }

  const listener = (e: any) => {
    if (e.target !== inputRef?.current && e.target.className !== 'speed-cascader-item' && e.target.className !== 'speed-icon') {
      setVisible(false);
    }
  };

  const showChildMenu = (level: number, id: number) => {
    let levelRes = level + 1
    let newLevelArr = [...levels, levelRes]

    //这里需要判断是否重复点击状态
    let someItem = newLevelArr.filter(item => item === levelRes)

    if (someItem.length < 2) {
      setLevels(newLevelArr)
      setIdList([...idList, id])
    } else {
      //重复
      let someIndex = newLevelArr.findIndex(item => item === levelRes)
      let limitLevels = newLevelArr.slice(0, someIndex + 1)
      setLevels(limitLevels)

      let toggleIdList = [...idList]
      toggleIdList[level] = id
      let newToggleIdList = toggleIdList.slice(0, limitLevels.length - 1)
      setIdList(newToggleIdList)
    }
  }

  const renderChild = (level: number) => {
    if (level === 0) {
      return optionsWarp.map((option: optionsType[0], id: number) => {
        return <div className={`${prefixCls}-item`} onClick={() => showChildMenu(level, id)} style={getActiveStyles(option)} >
          {option.value}
          <Icon icon={solid("angle-right")} size="1x" color={option.isClicked ? iconActiveColor : '$4c4c4c'}  ></Icon >
        </div >
      })
    } else {
      let findChildObj: optionsType = JSON.parse(JSON.stringify(optionsWarp))
      new Array(level).fill('').forEach((item: optionsType, index) => {
        if (findChildObj[idList[index]].children && index <= level - 1) {
          findChildObj = findChildObj[idList[index]].children
        }
      })

      const handleEndNode = (obj: any, id: number) => {
        if (obj.children && obj.children.length > 0) {
          showChildMenu(level, id)
        } else {
          if (idList.length < levels.length) {
            setIdList([...idList, id])
          }
        }
      }

      if (findChildObj.length > 0) {
        return findChildObj.map((obj: optionsType, id: number) => {
          return <div className={`${prefixCls}-item`} onClick={() => handleEndNode(obj, id)} style={getActiveStyles(obj)}>
            {obj.value}
            {
              obj.children && obj.children.length > 0 && <Icon icon={solid("angle-right")} size="1x" color={obj.isClicked ? iconActiveColor : '$4c4c4c'} ></Icon>
            }
          </div >
        })
      }
    }
  }

  return (
    <div className={cls} style={style}>
      <Input
        readOnly
        showCloseIcon={showCloseIcon}
        {...restProps}
        onClick={handleClick}
        onClear={handleClear}
        placeholder={pathText || placeholder}
        onRef={refs => {
          setInputRef(refs);
        }}
      ></Input>
      <Transition in={visible} animation='zoom-in-top' addEndListener={() => { }} timeout={1000}>
        <div className={`${prefixCls}-content`}>
          {
            levels.map((level: number, index: number) => {
              return <div className={`${prefixCls}-column`}>
                {
                  renderChild(level)
                }
              </div>
            })
          }
        </div >
      </Transition >
    </div >
  );
};

Cascader.defaultProps = {
  iconActiveColor: '$Cascader'
}
export default Cascader;
