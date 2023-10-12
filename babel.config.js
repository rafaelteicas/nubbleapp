module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@hooks': './src/hooks',
          '@theme': './src/theme',
          '@screens': './src/screens',
          '@routes': './src/routes',
          '@domain': './src/domain',
          '@brand': './src/brand',
          '@api': './src/api',
          '@types': './src/types',
        },
      },
    ],
  ],
};
