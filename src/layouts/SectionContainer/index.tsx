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
			minH="100vh"
			pt={'5rem'}
			pb="1rem"
			border="1px"
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
