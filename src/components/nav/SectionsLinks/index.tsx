import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

import { SECTIONS } from '@/constants/sections'
import { animation } from '@/styles/chakra-ui/animations/ActiveLink'
import { Flex, Button } from '@chakra-ui/react'

interface SectionLinksProps {
	onClose?: () => void
	activeSection?: string | null
}

export const SectionsLinks = ({
	onClose,
	activeSection
}: SectionLinksProps) => {
	const { t } = useTranslation('common')
	const router = useRouter()

	function handleScroll(section: string) {
		router.push(`#${section}`)
		onClose && onClose()
	}

	return (
		<Flex
			as="nav"
			align={{ base: 'start', md: undefined }}
			justify={{ base: 'center', md: undefined }}
			direction={{ base: 'column', lg: 'row' }}
			gap={{ base: '12', lg: '4' }}
			display="flex"
			h="full"
		>
			{SECTIONS.map((section) => (
				<Button
					key={section}
					pos="relative"
					color={activeSection?.includes(section) ? 'brand.700' : ''}
					fontSize={{ base: '4xl', lg: 'lg' }}
					fontWeight="light"
					bg="none"
					_hover={{ opacity: 0.6, bg: 'none' }}
					_after={{
						content: '""',
						position: 'absolute',
						bottom: '-5px',
						display: activeSection?.includes(section) ? 'block' : 'none',
						width: '100%',
						borderRadius: '5px',
						height: '2px',
						bgColor: 'brand.700',
						animation: animation
					}}
					transition="all 300ms"
					onClick={() => handleScroll(section)}
				>
					{t(`sections.${section}`)}
				</Button>
			))}
		</Flex>
	)
}
