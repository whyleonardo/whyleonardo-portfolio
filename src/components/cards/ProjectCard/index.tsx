import { TechBadge } from '@/components/ui/TechBadge'

import { Project } from '@/types/project'
import { Card } from '@chakra-ui/react'

export const ProjectCard = ({ project }: { project: Project }) => {
	return (
		<Card w="400px" h="300px" transition="all 300ms">
			{project.stack.map((tech) => (
				<TechBadge key={tech._id} tech={tech} />
			))}
		</Card>
	)
}
