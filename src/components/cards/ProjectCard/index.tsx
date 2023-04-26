import useTranslation from 'next-translate/useTranslation'

import { TechBadge } from '@/components/ui/TechBadge'

import { sanityImageBuilder } from '@/services/sanity-client'
import { Project } from '@/types/project'
import { Image } from '@chakra-ui/next-js'
import {
	Card,
	Flex,
	Heading,
	VStack,
	IconButton,
	chakra,
	Tag
} from '@chakra-ui/react'
import { GithubLogo, ArrowSquareOut, Folder } from '@phosphor-icons/react'

const ExternalLink = chakra(ArrowSquareOut)
const Github = chakra(GithubLogo)

export const ProjectCard = ({ project }: { project: Project }) => {
	const { t } = useTranslation('common')

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
						as="a"
						bg="none"
						_hover={{ bg: 'none', scale: 1.1, color: 'orange.600' }}
						transform="auto"
						aria-label="Github Project Link"
						href={project.github}
						icon={<Github size={30} />}
						target="blank"
					/>
					<IconButton
						as="a"
						bg="none"
						_hover={{ bg: 'none', scale: 1.1, color: 'brand.600' }}
						transform="auto"
						aria-label="Project Page Link"
						href={project.link}
						icon={<ExternalLink size={30} />}
						target="blank"
					/>
				</Flex>
			</Flex>

			<VStack h="100%" py="0.5rem">
				<Heading size="md">{project.title}</Heading>

				<Flex pos="relative" w="full" h="full" p="2">
					<Image
						_hover={{ filter: 'grayscale(0%)' }}
						transition="300ms ease"
						alt={project.title + 'cover'}
						filter="grayscale(100%)"
						rounded="10px"
						src={image}
						sx={{
							objectFit: 'cover',
							aspectRatio: '16/9'
						}}
						fill
					/>

					{!project.isCompleted && (
						<Tag
							pos="absolute"
							right="3"
							bottom="3"
							color="brand.700"
							fontWeight="bold"
							_dark={{ bg: 'brand.200', color: 'brand.900' }}
						>
							{t('projects-section.project-status')}
						</Tag>
					)}
				</Flex>
			</VStack>

			<Flex align="center" wrap="wrap" h="20%">
				{project.stack.map((tech) => (
					<TechBadge key={tech._id} tech={tech} />
				))}
			</Flex>
		</Card>
	)
}
