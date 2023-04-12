/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextTranslate = require('next-translate-plugin')

const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				pathname: '/images/**'
			}
		]
	}
}

module.exports = nextTranslate(nextConfig)
