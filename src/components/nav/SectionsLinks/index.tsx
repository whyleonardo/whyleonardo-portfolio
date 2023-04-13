import useTranslation from 'next-translate/useTranslation'
import { useEffect } from 'react'

import { SECTIONS } from '@/constants/sections'
import { animation } from '@/styles/chakra-ui/animations/ActiveLink'
import { Link } from '@chakra-ui/next-js'
import { Stack } from '@chakra-ui/react'

interface SectionLinksProps {
	onClose?: () => void
	activeSection?: string | null
}

export const SectionsLinks = ({
	onClose,
	activeSection
}: SectionLinksProps) => {
	const { t } = useTranslation('common')

	function handleScroll(sectiont: string) {
		const section = document.getElementById(sectiont)
		console.log(section)
		section && section?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<Stack
			as="nav"
			alignItems={{ base: 'start', md: undefined }}
			justifyContent={{ base: 'center', md: undefined }}
			direction={{ base: 'column', md: 'row' }}
			display="flex"
			h="full"
			spacing={{ base: '12', md: '4' }}
		>
			{SECTIONS.map((section) => (
				// <Link
				// 	pos="relative"
				// 	key={section}
				// 	onClick={onClose}
				// 	fontWeight="light"
				// 	fontSize={{ base: '4xl', md: 'lg' }}
				// 	color={activeSection?.includes(section) ? 'brand.700' : ''}
				// 	transition="all 300ms"
				// 	href={`#${section}`}
				// 	_hover={{ opacity: 0.6 }}
				// 	_after={{
				// 		content: '""',
				// 		position: 'absolute',
				// 		bottom: '-5px',
				// 		display: activeSection?.includes(section) ? 'block' : 'none',
				// 		width: '100%',
				// 		borderRadius: '5px',
				// 		height: '2px',
				// 		bgColor: 'brand.700',
				// 		animation: animation
				// 	}}
				// >
				// 	{t(`sections.${section}`)}
				// </Link>

				<button key={section} onClick={() => handleScroll(section)}>
					{section}
				</button>
			))}
		</Stack>
	)
}
