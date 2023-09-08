const nextConfig =
    {
        webpack(config)
        {
            config.module.rules.push
            ({
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
            });

            return config;
        },
        images:
            {
                remotePatterns:
                    [
                        {
                            protocol: 'https',
                            hostname: '**'
                        },
                        {
                            protocol: 'http',
                            hostname: '**'
                        }
                    ]
            },
        reactStrictMode: true,
        swcMinify: true
    };

module.exports = nextConfig;
