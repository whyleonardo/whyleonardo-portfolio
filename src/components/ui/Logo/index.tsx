import { chakra, useColorMode } from '@chakra-ui/react'
import { Code } from '@phosphor-icons/react'

const CodeIcon = chakra(Code)

export const Logo = () => {
	const { colorMode } = useColorMode()

	const isDark = colorMode === 'dark'

	return (
		<CodeIcon
			transition="all 300ms"
			_hover={{ transform: 'scale(1.1)' }}
			size={50}
			weight="fill"
			color={isDark ? 'gray.200' : 'gray.800'}
		/>
	)
}
