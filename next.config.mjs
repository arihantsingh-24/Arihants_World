/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(glb|gltf)$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        outputPath: 'static/models',
                        publicPath: '/_next/static/models',
                        name: '[name].[hash].[ext]',
                    },
                },
            ],
        },
        {
            test: /\.(mp3|wav)$/,
            use: {
              loader: 'file-loader',
              options: {
                publicPath: '/_next/static/media/',
                outputPath: 'static/media/',
                name: '[name].[hash].[ext]',
                esModule: false,
              },
            },
        }
    );

        return config;
    },
};

export default nextConfig;
