import React from "react";
import AutoComplete from "./AutoComplete";
import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import PageHeader from "../PageHeader";
export default {
  title: "数据录入/AutoComplete 自动补全",
  component: AutoComplete,
  parameters: {
    docs: {
      description: {
        component: "### 自动补全input组件",
      },
    },
  },
} as ComponentMeta<typeof AutoComplete>;

const defaultAutoCompleteTpl: ComponentStory<typeof AutoComplete> = (
  args: any
) => {
  let lakers = [
    { value: "aaa", name: "我的小 A" },
    { value: "aaaaaaaa我是小A", name: "我的小 B" },
    { value: "ccc", name: "我的小 C" },
    { value: "ddd", name: "我的小 D" },
    { value: "eee", name: "我的小 E" },
    { value: "aaaaaaaa我是小D", name: "我的小 F" },
    { value: "ggg", name: "我的小 G" },
    { value: "bbb", name: "我的小 B" },
    { value: "ccc", name: "我的小 C" },
    { value: "ddd", name: "我的小 D" },
    { value: "eee", name: "我的小 E" },
    { value: "fff", name: "我的小 F" },
    { value: "ggg", name: "我的小 G" },
  ];
  //测试异步
  const handleFetch = (query: string) => {
    console.log(query);

    return fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then(({ items }) => {
        console.log(items);
        return items.slice(0, 10).map((item: any) => ({ value: item.login, ...item }));

      });
  };

  const renderOptions = (item: any) => {
    return <div>{item.value}</div>;
  };

  return (
    <>
      <PageHeader title='本地数据域补全' />
      <div>
        <AutoComplete
          onSelect={() => action("selected")}
          fetchSuggestions={lakers}
          width={args.width}
          {...args}
        ></AutoComplete>
      </div>
      <PageHeader title='异步补全' />
      <div>
        <AutoComplete
          renderOptions={renderOptions}
          onSelect={() => action("selected")}
          fetchSuggestions={handleFetch}
          width={args.width}
          {...args}
        ></AutoComplete>
      </div>
    </>
  );
};

export const defaultAutoComplete = defaultAutoCompleteTpl.bind({});
defaultAutoComplete.args = {
  width: 600,
};
