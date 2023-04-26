import {} from 'next/font/google'

import { ProjectCard } from '@/components/cards/ProjectCard'

import { projectsStore } from '@/store/projects'
import { Grid } from '@chakra-ui/react'
import { useAtom } from 'jotai'

export const ProjectsSection = () => {
	const [projects] = useAtom(projectsStore)

	const orderedProjectsByDate = projects.sort((a, b) => {
		const dateA = new Date(a.dateWasCreated)
		const dateB = new Date(b.dateWasCreated)

		return dateB.getTime() - dateA.getTime()
	})

	return (
		<Grid
			gap="4"
			templateColumns={{
				base: 'repeat(1, 1fr)',
				md: 'repeat(2, 1fr)',
				lg: 'repeat(3, 1fr)'
			}}
			w="full"
			mt="2rem"
		>
			{orderedProjectsByDate.map((project) => (
				<ProjectCard key={project._id} project={project} />
			))}
		</Grid>
	)
}
