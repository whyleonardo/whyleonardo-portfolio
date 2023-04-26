import { TechBadge } from '@/components/ui/TechBadge'

import { sanityImageBuilder } from '@/services/sanity-client'
import { Project } from '@/types/project'
import {
	Card,
	Flex,
	Heading,
	VStack,
	Image,
	IconButton,
	chakra
} from '@chakra-ui/react'
import { GithubLogo, ArrowSquareOut, Folder } from '@phosphor-icons/react'

const ExternalLink = chakra(ArrowSquareOut)
const Github = chakra(GithubLogo)

export const ProjectCard = ({ project }: { project: Project }) => {
	console.log(project)

	const image = sanityImageBuilder.image(project.cover).url()
	return (
		<Card
			justifyContent="space-between"
			w="full"
			minH="300px"
			px="4"
			py="2"
			shadow="lg"
			_dark={{ bgColor: 'brand.800' }}
			transition="all 300ms"
			rounded="20px"
		>
			<Flex as="header" align="center" justify="space-between" h="20%">
				<Folder size={35} />

				<Flex gap="2">
					<IconButton
						bg="none"
						_hover={{ bg: 'none', scale: 1.1, color: 'orange.600' }}
						transform="auto"
						aria-label="Github Project Link"
						icon={<Github size={30} />}
					/>
					<IconButton
						bg="none"
						_hover={{ bg: 'none', scale: 1.1, color: 'brand.600' }}
						transform="auto"
						aria-label="Project Page Link"
						icon={<ExternalLink size={30} />}
					/>
				</Flex>
			</Flex>

			<VStack h="100%" py="0.5rem">
				<Heading size="md">{project.title}</Heading>
			</VStack>

			<Flex p="2">
				<Image
					_hover={{ filter: 'grayscale(0%)' }}
					transition="300ms ease"
					alt={project.title + 'cover'}
					filter="grayscale(100%)"
					rounded="10px"
					src={image}
				/>
			</Flex>

			<Flex align="center" wrap="wrap" h="20%">
				{project.stack.map((tech) => (
					<TechBadge key={tech._id} tech={tech} />
				))}
			</Flex>
		</Card>
	)
}
