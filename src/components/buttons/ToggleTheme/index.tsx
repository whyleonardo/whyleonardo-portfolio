import { useColorMode, IconButton, chakra } from '@chakra-ui/react'
import { Sun, Moon } from '@phosphor-icons/react'

const SunIcon = chakra(Sun)
const MoonIcon = chakra(Moon)

export const ToggleTheme = () => {
	const { colorMode, toggleColorMode } = useColorMode()

	const isDark = colorMode === 'dark'

	return (
		<IconButton
			bg="none"
			_hover={{ bg: 'none' }}
			aria-label="Toggle Theme"
			data-testid="button"
			icon={
				!isDark ? (
					<SunIcon
						size={25}
						_hover={{ color: 'yellow.500' }}
						transition="all 300ms"
					/>
				) : (
					<MoonIcon
						size={25}
						_hover={{ color: 'yellow.500' }}
						transition="all 300ms"
					/>
				)
			}
			onClick={toggleColorMode}
		/>
	)
}
