import { minify } from 'uglify-es'
import uglify from 'rollup-plugin-uglify'
import eslint from 'rollup-plugin-eslint'
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

export default {
  name: 'VueFocusOutside',
  entry: 'index.js',
  format: 'umd',
  dest: 'lib/index.js',
  plugins: [
    eslint({
      throwError: true,
      exclude: 'node_modules/**'
    }),
    commonjs({
      include: 'node_modules/**',
      namedExports: { 'focus-outside': ['bind', 'unbind' ] }
    }),
    resolve({
      extensions: ['.js']
    }),
    uglify({}, minify)
  ]
}
