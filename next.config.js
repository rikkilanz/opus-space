/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  webpack: (config) => {
    // Add a new rule for GLTF files using file-loader
    config.module.rules.push(
      {
        test: /\.(glb|gltf)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "static/media/", // adjust the output path as needed
            },
          },
        ],
      },
      {
        test: /\.(bin)$/,
        type: "asset/resource",
      }
    );

    return config;
  },
  output: "export",
};

module.exports = nextConfig;
