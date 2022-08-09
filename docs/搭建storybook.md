# 利用storybook快速搭建组件库

[github地址](https://github.com/ccj-007/react-speed-ui)
## 前提

我们要用react搭建组件库，社区目前最多的ui组件库的文档库，可以考虑Storybook，优点在于功能齐全，star更多，同时有mdx的支持，可以在文档中直接写jsx的语法，也就意味着文档也可以想组件一样去复用了。

## 搭建
  Storybook 将在安装过程中查看您的项目的依赖关系，并为您提供可用的最佳配置。所以一般可以在create-react-app创建后执行npm run storybook。这样就大功告成了，同时会在根目录生成.storybook, 在新版中已经简化了大量的配置，同时自定义主题其实很强大了。

## 如何自定义主题
```js
  // .storybook/manager.js
  import { addons } from '@storybook/addons';
  import yourTheme from './YourTheme';

  addons.setConfig({
    theme: yourTheme,
  });

// .storybook/manager.js
import { addons } from '@storybook/addons';
import yourTheme from './YourTheme';

addons.setConfig({
  theme: yourTheme,
});

// .storybook/YourTheme.js

import { create } from '@storybook/theming';

export default create({
  base: 'light',

  colorPrimary: 'black',
  colorSecondary: 'black',

  // UI
  appBg: 'white',
  appContentBg: '#fff',
  appBorderColor: 'black',
  appBorderRadius: 4,

  // Typography
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  // Text colors
  textColor: 'black',
  textInverseColor: 'rgba(255,255,255,0.9)',

  // Toolbar default and active colors
  barTextColor: '#fff',
  barSelectedColor: '#fff',
  barBg: 'black',

  // Form colors
  inputBg: 'white',
  inputBorder: 'silver',
  inputTextColor: 'black',
  inputBorderRadius: 4,

  brandTitle: 'react-speed-ui',
  brandTarget: '_self',
});
```
## 如何自定义文件名解析

```js
module.exports = {
  "stories": [
    "../src/components/**/*.stories.mdx",
    "../src/components/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/preset-create-react-app",
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-webpack5"
  },
}
```
这里一定要注意stories的路径的匹配，修改后一定要重新npm run storybook


## 如何修改文档的布局及其他配置
```js
// .storybook/preview.js
import '../src/styles/index.scss'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: '',
      order: ['Introduction', 'Button', 'Alert'], //排列顺序，支持多层嵌套
      locales: '',
    },
  },
}

```

## 如何生产文档

在产生组件的过程中，其实就是在写文档的过程，要注意组件文件名的首字母一定要大写，同时jsx组件上写入多行注释，在ts的interface中也写入注释，可以达到storybook解析其中的注释并显示在文档中。组件的文档书写方式有很多，本文以最先版本为例storybook@6.5.9为例，组件一般有两种文件的写法，一种是tsx一种是mdx。

tsx相对而言功能没有那么强大，不能随心所欲的写入markdown文档。当然storybook也支持在tsx中写一些markdown。

mdx 同时写tsx和markdown，同时支持导出组件，文档其实就是组件，复用性杠杠的， 还能写md语法。

## 示例
```js
//Button.tsx
//这里只写一些对文档关键的信息, 注意注释的格式一定要一致，会影响文档的生成
interface BaseButtonProps {
  className?: string;
  /**设置 Button 的禁用 */
  disabled?: boolean;
  /**设置 Button 的尺寸 */
  size?: ButtonSize;
  /**设置 Button 的类型 */
  btnType?: ButtonType;
  children: React.ReactNode;
  href?: string;
}
//必须传入指定的泛型

/**
 * Button  按钮组件 （这里的注释会展示在文档的首行用于描述）
 */
const Button: FC<BaseButtonProps> = (props) => {
  return (
    <>..... </>
  )
} 


//button.stories.tsx
import React from "react";
import { action } from "@storybook/addon-actions"; // 模拟组件的交互行为， 并展示在storybook的控制台上。
import Button from "./Button";
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  title: "通用/Button", //注意这里的层级，会影响文档的路径
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "### 按钮用于开始一个即时操作",
      },
    },
  },
} as ComponentMeta<typeof Button>

const defaultButtonTpl: ComponentStory<typeof Button> = () => (
  <Button onClick={action("clicked")}>default button</Button>
);

const buttonWithSizeTpl: ComponentStory<typeof Button> = (args: any) => (
  <>
    <Button size={args.size}>{args.children}</Button> &nbsp;&nbsp;
    <Button size="sm">small button</Button>
  </>
);

const buttonWithTypeTpl: ComponentStory<typeof Button> = (args: any) => (
  <>
    <Button btnType={args.btnType}>{args.children}</Button> &nbsp;&nbsp;
    <Button btnType="danger">danger button</Button> &nbsp;&nbsp;
    <Button btnType="link" href="https://google.com">
      link button
    </Button>
  </>
);

export const defaultButton = defaultButtonTpl.bind({});
defaultButton.args = {};

export const buttonWithSize = buttonWithSizeTpl.bind({});
buttonWithSize.args = {
  size: "lg",
  children: "large button",
};

export const buttonWithType = buttonWithTypeTpl.bind({});
buttonWithType.args = {
  btnType: "primary",
  children: "primary button",  //这里的args代表文档未来的调试面板
};

```

## 如何用github-pages部署

github一般可以直接在repo的setting中设置，执向根路径或者docs文档文件夹，注意这里不要基于master创建分支，而是先创建一个gh-pages空分支。在我们开发分支上安装gh-pages这个包，然后在pagckage.json配置你的路径，然后再定义你的scripts脚本，执行完后，你的github过一会就成功了。
```js
  "scripts": {
    "deploy-storybook": "gh-pages -d storybook-static",
  },
  "homepage": "http://ccj-007.github.io/react-speed-ui",
```