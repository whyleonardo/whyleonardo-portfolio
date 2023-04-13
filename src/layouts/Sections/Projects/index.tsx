import {} from 'next/font/google'

import { ProjectCard } from '@/components/cards/ProjectCard'

import { projectsStore } from '@/store/projects'
import { Flex } from '@chakra-ui/react'
import { useAtom } from 'jotai'

export const ProjectsSection = () => {
	const [projects] = useAtom(projectsStore)
	return (
		<>
			<Flex justify="center" wrap="wrap" gap="4" p="2rem">
				{projects.map((project) => (
					<ProjectCard key={project._id} project={project} />
				))}
			</Flex>
		</>
	)
}
