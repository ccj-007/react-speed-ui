import React, { ChangeEvent, FC, useState, ReactElement } from 'react'
import classNames from 'classnames'
import { Input, InputExternalProps } from '../Input/input'

interface AutoItemType {
  value: string
}
type AutoItemProps<T = {}> = AutoItemType | T

export interface AutoCompleteProps extends InputExternalProps {
  fetchSuggestions: (str: string) => string[] | Promise<any[]>
  onSelect?: (item: string) => void
  /* 自定义渲染 */
  renderOptions?: (item: AutoItemProps) => ReactElement
}

export const AutoComplete: FC<AutoCompleteProps> = (props) => {
  const {
    fetchSuggestions,
    onSelect,
    value,
    renderOptions,
    ...restProps
  } = props

  const [inputValue, setInputValue] = useState<string>(value)
  const [suggesstions, setSuggestions] = useState<AutoItemProps[]>([])

  console.log(suggesstions);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.trim()
    setInputValue(value)
    if (value) {
      //获取建议的列表
      const results = fetchSuggestions(value)
      if (results instanceof Promise) {
        results.then(data => {
          setSuggestions(data)
        })
      } else {
        setSuggestions(results)
      }
    } else {
      setSuggestions([])
    }
  }

  const handleSelect = (item: string) => {
    setSuggestions([])
    setInputValue(item)
    if (onSelect) {
      onSelect(item)
    }
  }

  //自定义渲染
  const renderTpl = (item: AutoItemProps) => {
    return renderOptions ? renderOptions(item) : item.value
  }

  const generateDropdown = () => {
    return (
      <ul>
        {
          suggesstions.map((item, index) => {
            return (
              <li key={index} onClick={() => handleSelect(item)}>
                {/* 这里需要做自定义渲染 */}
                {renderTpl(item)}
              </li>
            )
          })
        }
      </ul>
    )
  }

  return (
    <div className="viking-auto-complete" >
      <Input
        value={inputValue}
        onChange={handleChange}
        {...restProps}
      />
      {suggesstions.length > 0 && generateDropdown()}
    </div>
  )
}


