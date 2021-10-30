module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@assets': './assets',
          '@components': './src/components',
          '@contexts': './src/contexts',
          '@navigation': './src/navigation',
          '@screens': './src/screens',
          '@types': './src/types',
          '@themes': './themes.tsx',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
