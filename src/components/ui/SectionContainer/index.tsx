import useTranslation from 'next-translate/useTranslation'
import { ReactNode } from 'react'

import { Heading, Flex, Stack, StackProps } from '@chakra-ui/react'

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
			align="center"
			direction="column"
			minH={section === 'home' ? 'calc(100vh - 7rem)' : '100vh'}
			pt="5rem"
			pb="1rem"
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

			<Flex>{children}</Flex>
		</Stack>
	)
}
