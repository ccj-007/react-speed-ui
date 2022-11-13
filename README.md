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

- 50 多个轻量组件开箱即用 📟
- TS 支持 💎
- 主题切换 💱
- 命名隔离 🔞
- 卡通风 🔫
- 单元测试 📧
- 支持按需加载 🎉
- storybook + vite 构建文档 👍
- gulp 打包组件库 👍
- 命令行直接生成**组件开发模板**

## 使用场景：

1. 用于快速搭建**个人应用**📨
2. 有时候写个**DEMO**，对样式和组件有要求，那么再适合不过了

## 启动 storybook 项目

```sh
npm run storybook
```

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
<script type="text/javascript" src="./node_modules/react-speed-ui/dist/lib/speed.min.js"></script>
```

> 使用 CDN (目前暂不支持)

## 快速使用

> 1. 全量引入

```js
import { Button } from 'react-speed-ui';
import 'react-speed-ui/dist/css/speed.min.css';

const App: React.FC = () => (
  <>
    <Button btnType='danger'>danger button</Button>
  </>
);

export default App;
```

> 2.  按需引入

- esm 导入

```js
import Button from 'react-speed-ui/dist/esm/components/Button';
import 'react-speed-ui/dist/css/components/button.css';
```

- cjs 导入

```js
const Button = require('react-speed-ui/dist/lib/components/Button').default;
require('react-speed-ui/dist/css/components/button.css');
```

> 3. 自动化按需导入

- 原目录结构无法实现 babel-import-plugin 的插件自动导入，所以自己手动封装了 babel 插件来实现适合本组件库的按需导入 js、css，同时也具备了扩展性。虽然 es
  6 的静态编译带来了 tree-sharking 的摇钱树优化，对 css 文件是无法实现的，在 js 中一些异常的对象变量的引用传入函数中、类的语法在 babel 中的转化也会导致副作用的生成，不能使组件被完全优化。

```js
import { Button } from 'react-speed-ui';
ReactDOM.render(<Button>xxxx</Button>);

      ↓ ↓ ↓ ↓ ↓ ↓

import Button from 'react-speed-ui/dist/esm/components/Button';
import 'react-speed-ui/dist/css/components/button.css';
ReactDOM.render(<Button>xxxx</Button>);
```

### 如何配置（目前暂时未发布到 npm）

```shell
git clone git@github.com:ccj-007/babel-plugin-idea.git

cd ./import-plugin/plugin/plugin.js
```

将此文件拷贝到你的项目中并新建 babel.config.js 配置如下：

```json
module.exports = {
  "plugins": [
  [
    require('../babel-preset-import-plugin'),
    {
      "libName": "react-speed-ui",  //组件库名
      "stylePath": "dist/css/components", //样式路径
      "styleOneLower": true,  //样式文件首字母是否大写
      "componentPath": "dist/lib/components", //组件文件路径
    },
  ],
];
}
```

在 create-react-app 配置需`npm run eject`, 然后在 webpack.config.js 配置 babel-loader，传入对应的 plugins 配置，某些情况下模块解析失败，注意默认配置了缓存，可以关闭 cacheDirectory 或在 node_modules 下.cache 手动删除缓存即可恢复。
