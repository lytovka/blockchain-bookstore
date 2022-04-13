module.exports = {
    plugins: [
        [
            'module-resolver',
            {
                alias: {
                    '~/api': './src/api',
                    '~/components': './src/components',
                    '~/configs': './src/configs',
                    '~/contexts': './src/contexts',
                    '~/styles': './src/styles',
                    '~/theme': './src/theme'
                },
            },
        ],
    ],
    presets: ['next/babel'],
};
