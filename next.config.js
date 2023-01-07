/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async rewrites() {
    return [
      {
        PACKAGE_ID: process.env.PACKAGE_ID,
        CORE: process.env.CORE,
        NFT_STATE: process.env.NFT_STATE,
        NFT_MARKET: process.env.NFT_MARKET,
        LOTTERY: process.env.LOTTERY,
        FLIP: process.env.FLIP,
        RACE: process.env.RACE,
        TREASURY: process.env.TREASURY,
        SNO: process.env.SNO,
      },
    ];
  },
};

module.exports = nextConfig;
