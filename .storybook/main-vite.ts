// .storybook/main.js
import type { StorybookViteConfig } from '@storybook/builder-vite';

const { mergeConfig } = require('vite');

const config: StorybookViteConfig = {
  stories: ['../src/components/**/*.stories.mdx', '../src/components/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/preset-create-react-app',
  ],
  framework: '@storybook/react',
  core: {
    // builder: "@storybook/builder-webpack5",
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      esbuild: {
        logOverride: {
          'this-is-undefined-in-esm': 'silent',
        },
        jsxInject: `/** @jsxImportSource @emotion/react */`,
      },
    });
  },
};
export default config;
