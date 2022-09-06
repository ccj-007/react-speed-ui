<p align="center">
<img src="https://cdn.lijinke.cn/logo.png" width="100"/>
</p>

<h1 align="center">
react-speed-ui
</h1>

<h4 align="center">
 极速组件库 : 速度不差、体积小巧、追求新技术的组件库
</h4>

<p align="center">
  <a href="https://www.npmjs.com/package/react-speed-ui" title="npm">
    <img src="https://img.shields.io/npm/dm/react-speed-ui.svg?style=for-the-badge" alt="npm"/>
  </a>
   <a href="https://badge.fury.io/js/react-speed-ui" title="npm">
    <img src="https://img.shields.io/npm/v/react-speed-ui.svg?style=for-the-badge" alt="npm version"/>
  </a>
  <a href="https://isitmaintained.com/project/react-speed-ui/react-speed-ui">
    <img src="https://img.shields.io/github/issues/ccj-007/react-speed-ui.svg?style=for-the-badge"/>
  </a>
  <a href="https://github.com/react-speed-ui/react-speed-ui">
    <img src="https://img.shields.io/github/stars/ccj-007/react-speed-ui.svg?style=for-the-badge" />
  </a>
</p>

## 特色：

- 30 多个轻量组件开箱即用 📟
- TS 支持 💎
- 主题切换 💱
- 命名隔离 🔞
- 卡通风 🔫
- 单元测试 📧
- 支持按需加载 css、js🎉
- storybook + vite 构建文档 👍\
- gulp 打包组件库 👍
- 支持国际化 👍
- 命令行直接生成**组件开发模板**

## 使用场景：

1. 用于快速搭建**个人应用**📨
2. 有时候写个**DEMO**，对样式和组件有要求，那么再适合不过了

## 如何安装

> 使用 npm

```
npm i react-speed-ui -S
```

> 使用 yarn

```
yarn add react-speed-ui
```

> SDK 引入

```js
<link rel="stylesheet" href="./node_modules/react-speed-ui/dist/css/speed.min.css">
<script type="text/javascript" src="./node_modules/react-speed-ui/dist/lib/speed.js"></script>
```

> 使用 CDN (目前暂不支持)

## 快速使用

> 1. 全量引入

```js
import { Button } from "react-speed-ui";
import "react-speed-ui/dist/css/speed.min.css";

const App: React.FC = () => (
	<>
		<Button btnType="danger">danger button</Button>
	</>
);

export default App;
```

> 2. 按需引入

```js
import { Button } from "react-speed-ui";
import "react-speed-ui/dist/css/components/button.css";
```

> 3. 使用 babel-plugin-import （暂不支持）
