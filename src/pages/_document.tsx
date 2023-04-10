import { Html, Head, Main, NextScript } from 'next/document'

import { theme } from '@/styles/chakra-ui/theme'
import { CacheProvider } from '@chakra-ui/next-js'
import { ColorModeScript } from '@chakra-ui/react'

export default function Document() {
	return (
		<Html lang="en">
			<Head />
			<body>
				<CacheProvider>
					<Main />
					<ColorModeScript initialColorMode={theme.config.initialColorMode} />
					<NextScript />
				</CacheProvider>
			</body>
		</Html>
	)
}
