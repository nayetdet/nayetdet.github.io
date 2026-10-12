export default {
  extends: ['stylelint-config-standard'],
  defaultSeverity: 'error',
  ignoreFiles: ['**/.agents/**', '**/dist/**', '**/node_modules/**'],
  reportDescriptionlessDisables: true,
  reportInvalidScopeDisables: true,
  reportNeedlessDisables: true,
  reportUnscopedDisables: true,
  rules: {
    'at-rule-no-unknown': [
      true,
      { ignoreAtRules: ['custom-variant', 'theme'] },
    ],
    'import-notation': null,
    'lightness-notation': null,
    'hue-degree-notation': null,
    'declaration-no-important': true,
    'max-nesting-depth': 2,
    'selector-max-compound-selectors': 3,
    'selector-max-id': 0,
    'selector-max-specificity': '0,3,0',
  },
};
