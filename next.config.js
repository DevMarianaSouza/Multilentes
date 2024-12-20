/** @type {import('next').NextConfig} */

require('dotenv').config()

const nextConfig = {
  reactStrictMode: true,
  
}

const env = {
  env: {
    ENV: process.env.ENV,
    NEXT_PUBLIC_RECAPTCHA_KEY: process.env.RECAPTCHA_KEY,
    BACK_DOMAIN: process.env.BACK_DOMAIN,
    BACK_TOKEN: process.env.BACK_TOKEN,
  }
}

const webpack = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    })

    return config
  }
}

module.exports = [[nextConfig, webpack, env]]