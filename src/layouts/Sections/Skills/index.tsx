import { TechCard } from '@/components/cards/TechCard'

import { techs } from '@/constants/techs'
import { Grid } from '@chakra-ui/react'

export const SkillsSection = () => {
	return (
		<Grid
			justifyContent="center"
			gap="10"
			templateColumns={{
				base: 'repeat(1, 1fr)',
				md: 'repeat(2, 1fr)',
				lg: 'repeat(3, 1fr)'
			}}
			w="full"
			py="6"
		>
			{techs.map((tech) => (
				<TechCard key={tech.name} tech={tech} />
			))}
		</Grid>
	)
}
