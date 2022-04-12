module.exports =
{
    presets: ["next/babel"],
    plugins: [
        [
            'module-resolver',
            {
                alias: {
                    '~/components': './src/components',
                    '~/contexts': './src/contexts',
                    '~/theme': './src/theme',
                    '~/styles': './src/styles',
                },
            },
        ],
    ]
}