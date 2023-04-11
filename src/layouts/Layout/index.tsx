import { Inter } from 'next/font/google'

import { Header } from '@/components/ui/Header'

import { Container, useColorMode } from '@chakra-ui/react'
const inter = Inter({ subsets: ['latin'] })

export const Layout = () => {
	const { colorMode } = useColorMode()

	const isDark = colorMode === 'dark'

	return (
		<Container
			overflowX="hidden"
			h="100vh"
			color={isDark ? 'brand.100' : 'brand.900'}
			fontFamily={inter.style.fontFamily}
			bgColor={!isDark ? 'brand.100' : 'brand.900'}
		>
			<Header />
		</Container>
	)
}
