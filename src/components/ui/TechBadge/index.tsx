import { Tech } from '@/types/tech'
import { Tag, TagLabel } from '@chakra-ui/react'

export const TechBadge = ({ tech }: { tech: Tech }) => {
	return (
		<Tag
			w="max-content"
			mx="1"
			fontFamily="sans-serif"
			fontWeight="semibold"
			textTransform="capitalize"
			_hover={{ transform: 'scale(1.1)' }}
			cursor="pointer"
			transition="all 300ms"
			colorScheme={tech.color}
		>
			<TagLabel>{tech.name}</TagLabel>
		</Tag>
	)
}
