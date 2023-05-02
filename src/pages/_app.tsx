import '@/styles/global.css'
import type { AppProps } from 'next/app'

import { ChakraProvider } from '@/providers/ChakraProvider'
import { JotaiProvider } from '@/providers/JotaiProvider'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<JotaiProvider>
			<ChakraProvider>
				<Component {...pageProps} />
				<Analytics />
			</ChakraProvider>
		</JotaiProvider>
	)
}
