module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '~/components': './src/components',
          '~/contexts': './src/contexts',
          '~/styles': './src/styles',
          '~/theme': './src/theme',
        },
      },
    ],
  ],
  presets: ['next/babel'],
};
