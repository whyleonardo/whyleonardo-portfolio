import { Rubik } from 'next/font/google'

import { Tech } from '@/types/tech'
import { Tag, TagLabel } from '@chakra-ui/react'

const rubik = Rubik({ subsets: ['latin'] })

export const TechBadge = ({ tech }: { tech: Tech }) => {
	return (
		<Tag
			w="max-content"
			h="1rem"
			m="1"
			fontFamily={rubik.style.fontFamily}
			letterSpacing="wide"
			textTransform="capitalize"
			_dark={{ bgColor: '#4E5B60', color: 'gray.100', opacity: '0.9' }}
			colorScheme={tech.color}
			rounded="20px"
		>
			<TagLabel>{tech.name}</TagLabel>
		</Tag>
	)
}
