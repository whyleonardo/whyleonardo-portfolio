import {} from 'next/font/google'

import { ProjectCard } from '@/components/cards/ProjectCard'

import { projectsStore } from '@/store/projects'
import { Grid } from '@chakra-ui/react'
import { useAtom } from 'jotai'

export const ProjectsSection = () => {
	const [projects] = useAtom(projectsStore)
	return (
		<Grid
			justifyContent="center"
			gap="4"
			templateColumns={{
				base: 'repeat(1, 1fr)',
				md: 'repeat(2, 1fr)',
				lg: 'repeat(3, 1fr)'
			}}
			w="full"
			p="2rem"
		>
			{projects.map((project) => (
				<ProjectCard key={project._id} project={project} />
			))}
		</Grid>
	)
}
