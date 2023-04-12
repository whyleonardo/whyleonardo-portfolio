import '@/styles/global.css'
import type { AppProps } from 'next/app'

import { ChakraProvider } from '@/providers/ChakraProvider'
import { JotaiProvider } from '@/providers/JotaiProvider'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<JotaiProvider>
			<ChakraProvider>
				<Component {...pageProps} />
			</ChakraProvider>
		</JotaiProvider>
	)
}
