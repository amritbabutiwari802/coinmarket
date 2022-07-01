/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'academy-public.coinmarketcap.com',
            's2.coinmarketcap.com',
            's3.coinmarketcap.com',
        ],
    },
    reactStrictMode: true,
}

module.exports = nextConfig
