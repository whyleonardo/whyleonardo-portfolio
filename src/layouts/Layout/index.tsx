import { Inter } from 'next/font/google'

import { Header } from '@/components/ui/Header'

import { Container } from '@chakra-ui/react'
const inter = Inter({ subsets: ['latin'] })

export const Layout = () => {
	return (
		<Container
			h="100vh"
			fontFamily={inter.style.fontFamily}
			bgColor="blackAlpha.100"
		>
			<Header />
		</Container>
	)
}
