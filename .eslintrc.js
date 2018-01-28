module.exports = {
  extends: [
    'airbnb-base', 'plugin:jest/recommended', 'prettier'
  ],
  plugins: ['jest'],
  rules: {},
  env: {
    'node': true,
    'jest/globals': true
  }
};
