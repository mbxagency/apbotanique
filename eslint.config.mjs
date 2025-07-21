import js from '@eslint/js'
import globals from 'globals'

export default [
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2022,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        ecmaVersion: 2022,
        sourceType: 'module'
      }
    },
    rules: {
      // General rules
      'no-console': 'warn',
      'no-debugger': 'error',
      'no-unused-vars': 'warn',
      'prefer-const': 'error',
      'no-var': 'error',
      
      // Code quality
      'eqeqeq': ['error', 'always'],
      'curly': ['error', 'all'],
      'no-eval': 'error',
      'no-implied-eval': 'error',
      'no-new-func': 'error',
      'no-script-url': 'error',
      
      // Best practices
      'array-callback-return': 'error',
      'consistent-return': 'error',
      'default-case': 'error',
      'default-case-last': 'error',
      'dot-notation': 'error',
      'no-caller': 'error',
      'no-else-return': 'error',
      'no-empty-function': 'error',
      'no-eq-null': 'error',
      'no-extra-bind': 'error',
      'no-extra-label': 'error',
      'no-floating-decimal': 'error',
      'no-iterator': 'error',
      'no-labels': 'error',
      'no-lone-blocks': 'error',
      'no-loop-func': 'error',
      'no-multi-spaces': 'error',
      'no-multi-str': 'error',
      'no-new': 'error',
      'no-new-wrappers': 'error',
      'no-octal-escape': 'error',
      'no-proto': 'error',
      'no-return-assign': 'error',
      'no-self-compare': 'error',
      'no-sequences': 'error',
      'no-throw-literal': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unused-expressions': 'error',
      'no-useless-call': 'error',
      'no-useless-concat': 'error',
      'no-useless-return': 'error',
      'no-void': 'error',
      'no-warning-comments': 'warn',
      'prefer-promise-reject-errors': 'error',
      'radix': 'error',
      'require-await': 'error',
      'yoda': 'error',
      
      // Stylistic
      'array-bracket-newline': ['error', 'consistent'],
      'array-element-newline': ['error', 'consistent'],
      'block-spacing': 'error',
      'brace-style': ['error', '1tbs', { allowSingleLine: true }],
      'camelcase': 'error',
      'comma-dangle': ['error', 'never'],
      'comma-spacing': 'error',
      'comma-style': 'error',
      'computed-property-spacing': 'error',
      'eol-last': 'error',
      'func-call-spacing': 'error',
      'function-paren-newline': ['error', 'consistent'],
      'indent': ['error', 2, { SwitchCase: 1 }],
      'key-spacing': 'error',
      'keyword-spacing': 'error',
      'linebreak-style': ['error', 'unix'],
      'max-len': ['error', { code: 100, ignoreUrls: true }],
      'new-cap': 'error',
      'new-parens': 'error',
      'no-array-constructor': 'error',
      'no-mixed-spaces-and-tabs': 'error',
      'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1 }],
      'no-new-object': 'error',
      'no-tabs': 'error',
      'no-trailing-spaces': 'error',
      'object-curly-newline': ['error', { consistent: true }],
      'object-curly-spacing': 'error',
      'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
      'one-var': ['error', 'never'],
      'one-var-declaration-per-line': 'error',
      'operator-linebreak': ['error', 'before'],
      'padded-blocks': ['error', 'never'],
      'quote-props': ['error', 'as-needed'],
      'quotes': ['error', 'single', { avoidEscape: true }],
      'semi': ['error', 'always'],
      'semi-spacing': 'error',
      'semi-style': 'error',
      'space-before-blocks': 'error',
      'space-before-function-paren': ['error', 'always'],
      'space-in-parens': 'error',
      'space-infix-ops': 'error',
      'space-unary-ops': 'error',
      'spaced-comment': 'error',
      'switch-colon-spacing': 'error',
      'template-tag-spacing': 'error',
      'unicode-bom': 'error',
      'wrap-regex': 'error'
    }
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'dist/**',
      'build/**',
      'coverage/**',
      '*.config.js',
      '*.config.mjs'
    ]
  }
] 