import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

import { Header } from '@/components/ui/Header'

import { Container, Flex, Box, useColorMode } from '@chakra-ui/react'
const inter = Inter({ subsets: ['latin'] })

export const PageLayout = () => {
	const { colorMode } = useColorMode()
	const [activeSection, setActiveSection] = useState(null)

	const isDark = colorMode === 'dark'

	useEffect(() => {
		function handleScroll() {
			const sections = document.querySelectorAll('[data-section]')
			const viewHeight = window.innerHeight
			const viewTop = window.pageYOffset
			const viewBottom = viewTop + viewHeight

			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			for (const section of sections) {
				const rect = section.getBoundingClientRect()
				const sectionTop = rect.top + viewTop
				const sectionBottom = sectionTop + rect.height

				if (sectionTop <= viewBottom && sectionBottom >= viewTop) {
					setActiveSection(section.getAttribute('data-section'))
					break
				}
			}
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<Container
			minH="100vh"
			color={isDark ? 'brand.100' : 'brand.900'}
			fontFamily={inter.style.fontFamily}
			bgColor={!isDark ? 'brand.100' : 'brand.900'}
			scrollBehavior="smooth"
		>
			<Box pos="absolute" top="0" data-section="home" id="home" />

			<Header activeSection={activeSection} />

			<Flex h="calc(600px - 5rem)" border="1px">
				Home
			</Flex>

			<Flex
				h="1600px"
				mt="20px"
				pt="5rem"
				border="1px"
				data-section="about"
				id="about"
			>
				About
			</Flex>

			<Flex
				h="1600px"
				mt="20px"
				pt="5rem"
				border="1px"
				data-section="skills"
				id="skills"
			>
				Skills
			</Flex>

			<Flex
				h="1600px"
				mt="20px"
				pt="5rem"
				border="1px"
				data-section="projects"
				id="projects"
			>
				Projects
			</Flex>

			<Flex
				h="1600px"
				mt="20px"
				pt="5rem"
				border="1px"
				data-section="contact"
				id="contact"
			>
				Contact
			</Flex>
		</Container>
	)
}
