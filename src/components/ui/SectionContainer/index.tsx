import useTranslation from 'next-translate/useTranslation'
import { ReactNode } from 'react'

import { Heading, Grid } from '@chakra-ui/react'

interface SectionContainerProps {
	children: ReactNode
	section: string
}

export const SectionContainer = ({
	children,
	section
}: SectionContainerProps) => {
	const { t } = useTranslation('common')

	return (
		// <Stack
		// 	as={'section'}
		// 	align="center"
		// 	direction="column"
		// 	minH={section === 'home' ? 'calc(100vh - 5rem)' : '100vh'}
		// 	pt="5rem"
		// 	pb="1rem"
		// 	data-section={section}
		// 	id={section}
		// 	{...rest}
		// >
		// 	<Heading
		// 		display={section === 'home' ? 'none' : 'block'}
		// 		fontSize="3rem"
		// 		fontWeight="thin"
		// 		textAlign="center"
		// 		_hover={{
		// 			bgGradient: 'linear(to-r, brand.500, brand.700)',
		// 			bgClip: 'text',
		// 			color: 'transparent'
		// 		}}
		// 		transition="all 300ms"
		// 	>
		// 		{t(`sections.${section}`)}
		// 	</Heading>

		// 	{children}
		// </Stack>
		<Grid
			gap="2"
			templateAreas={`
		"h2"
		"section"
		`}
			minH={section === 'home' ? 'calc(100vh - 5rem)' : '100vh'}
			data-section={section}
			id={section}
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
