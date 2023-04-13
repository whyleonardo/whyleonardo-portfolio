import useTranslation from 'next-translate/useTranslation'
import { ReactNode } from 'react'

import { Heading, Stack, StackProps } from '@chakra-ui/react'

interface SectionContainerProps extends StackProps {
	children: ReactNode
	section: string
}

export const SectionContainer = ({
	children,
	section,
	...rest
}: SectionContainerProps) => {
	const { t } = useTranslation('common')

	return (
		<Stack
			as={'section'}
			alignItems="center"
			justifyContent="center"
			minH="100vh"
			pt={section !== 'home' ? '5rem' : '0'}
			pb="1rem"
			data-section={section}
			id={section}
			{...rest}
		>
			<Heading
				display={section === 'home' ? 'none' : 'block'}
				fontSize="3rem"
				fontWeight="thin"
				textAlign="center"
				_hover={{
					bgGradient: 'linear(to-r, brand.500, brand.700)',
					bgClip: 'text',
					color: 'transparent'
				}}
				transition="all 300ms"
			>
				{t(`sections.${section}`)}
			</Heading>

			{children}
		</Stack>
	)
}
