module.exports = {
    plugins: [
        [
            'module-resolver',
            {
                alias: {
                    '~/api': './src/api',
                    '~/components': './src/components',
                    '~/configs': './src/configs',
                    '~/constants': './src/constants',
                    '~/contexts': './src/contexts',
                    "~/data": "./src/data",
                    '~/styles': './src/styles',
                    '~/theme': './src/theme',
                    '~/utils': './src/utils',
                },
            },
        ],
    ],
    presets: ['next/babel'],
};
