// .storybook/preview.js
import '../src/styles/index.scss';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: '',
      order: ['Introduction', '全局控制', '通用', '布局', '数据录入', '数据展示'],
      locales: '',
    },
  },
};
