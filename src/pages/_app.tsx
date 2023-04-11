import '@/styles/global.css'
import type { AppProps } from 'next/app'

import { ChakraProvider } from '@/providers/ChakraProvider'

export default function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	)
}
