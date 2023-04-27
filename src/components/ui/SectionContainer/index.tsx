import useTranslation from 'next-translate/useTranslation'
import { ReactNode } from 'react'

import { Heading, Grid, GridProps } from '@chakra-ui/react'

interface SectionContainerProps extends GridProps {
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
		<Grid
			templateAreas={`
		"h2"
		"section"
		"section"
		`}
			minH={section === 'home' ? 'calc(100vh - 5rem)' : '100vh'}
			// pb="5rem"
			data-section={section}
			id={section}
			{...rest}
		>
			<Heading
				display={section === 'home' ? 'none' : 'block'}
				pt="5rem"
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
		</Grid>
	)
}
