import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import reactRefresh from 'eslint-plugin-react-refresh'
import reactHooks from 'eslint-plugin-react-hooks'
import tseslint from 'typescript-eslint'
import globals from 'globals'

const compat = new FlatCompat()

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...compat.config({
    extends: ['plugin:react-hooks/recommended'],
  }),
  {
    plugins: {
      'react-refresh': reactRefresh,
    },
    rules: {
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
    },
  },
]
