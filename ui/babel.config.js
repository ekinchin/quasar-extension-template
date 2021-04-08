module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    '@quasar/babel-preset-app',
  ],
  plugins: [
    ['babel-plugin-graphql-tag'],
    ['@babel/plugin-transform-runtime'],
  ],
};
