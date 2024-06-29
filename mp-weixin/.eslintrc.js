module.exports = {
  root: true,
  extends: ['@tuniao/eslint-config', 'plugin:prettier/recommended'],
  plugins: ['vue', 'prettier'],
  rules: {
    // Prettier configuration to enforce code style
    'prettier/prettier': [
      'error',
      {
        singleQuote: true, // 使用单引号而不是双引号
        semi: false, // 语句末尾不使用分号
        printWidth: 80, // 最大行宽
        useTabs: false, // 使用空格而不是制表符进行缩进
        tabWidth: 2, // 每个缩进级别使用 2 个空格
        trailingComma: 'es5', // 在 ES5 中有效的地方使用尾随逗号（对象、数组等）
        bracketSpacing: true, // 在对象字面量的大括号之间使用空格
        vueIndentScriptAndStyle: true, // 缩进 Vue 文件中的 <script> 和 <style> 标签内容
      },
    ],
    // Vue specific rules
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 3, // 单行元素最多允许 3 个属性
        multiline: {
          max: 1, // 多行元素每行最多允许 1 个属性
          allowFirstLine: false, // 不允许将属性放在多行元素的第一行
        },
      },
    ],
  },
}
