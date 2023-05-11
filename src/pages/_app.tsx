import '@/styles/global.css'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'

import { ChakraProvider } from '@/providers/ChakraProvider'
import { JotaiProvider } from '@/providers/JotaiProvider'
import { Analytics } from '@vercel/analytics/react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		AOS.init({
			easing: 'ease-out-cubic',
			once: true,
			offset: 50
		})
	}, [])

	return (
		<JotaiProvider>
			<ChakraProvider>
				<Component {...pageProps} />
				<Analytics />
			</ChakraProvider>
		</JotaiProvider>
	)
}
