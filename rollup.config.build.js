import resolve from '@rollup/plugin-node-resolve'
import commonjs from "@rollup/plugin-commonjs";
import babel from 'rollup-plugin-babel'
import { terser } from "rollup-plugin-terser";
import postcss from "rollup-plugin-postcss";
import { DEFAULT_EXTENSIONS } from '@babel/core';
import typescript from 'rollup-plugin-typescript2';

export default {
  input: 'src/index.ts',
  output: {
    file: 'lib/index.js',
    format: 'umd',
    name: 'react-speed-ui'
  },
  external: ['react', 'react-dom'],
  plugins: [
    typescript({
      tsconfig: './tsconfig.types.json'
    }),
    resolve(),
    commonjs(),
    babel({
      exclude: ['node_modules/**', 'src/**/*.stories.(tsx|mdx|js|jsx)'],
      extensions: [
        ...DEFAULT_EXTENSIONS,
        '.ts',
        '.tsx',
        '.jsx'
      ]
    }),
    postcss(),
    terser(),
  ]
}