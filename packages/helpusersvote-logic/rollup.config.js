import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import resolve from 'rollup-plugin-node-resolve'
import minify from 'rollup-plugin-babel-minify'
import json from 'rollup-plugin-json'
import url from 'rollup-plugin-url'
import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      exports: 'named'
    },
    {
      file: pkg.module,
      format: 'es',
      exports: 'named'
    }
  ],
  plugins: [
    external(),
    url(),
    json(),
    babel({
      exclude: 'node_modules/**',
      plugins: ['external-helpers']
    }),
    resolve({
      preferBuiltins: false
    }),
    commonjs(),
    minify()
  ],
  external: ['axios', 'dayjs', 'in-us']
}
