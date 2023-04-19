import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

import { Header } from '@/components/ui/Header'
import { SectionContainer } from '@/components/ui/SectionContainer'

import { AboutSection } from '@/layouts/Sections/About'
import { HomeSection } from '@/layouts/Sections/Home'
import { ProjectsSection } from '@/layouts/Sections/Projects'
import { Container, Box, useColorMode, Stack } from '@chakra-ui/react'

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
			<Box
				pos="absolute"
				top="0"
				h="calc(100vh - 4rem)"
				data-section="home"
				id="home"
			/>

			<Header activeSection={activeSection} />

			<Stack px="2rem" spacing="10">
				<SectionContainer section="home">
					<HomeSection />
				</SectionContainer>

				<SectionContainer section="about">
					<AboutSection />
				</SectionContainer>

				<SectionContainer section="skills">
					<p>Skills</p>
				</SectionContainer>

				<SectionContainer section="projects">
					<ProjectsSection />
				</SectionContainer>

				<SectionContainer section="contact">
					<p>Contact</p>
				</SectionContainer>
			</Stack>
		</Container>
	)
}
