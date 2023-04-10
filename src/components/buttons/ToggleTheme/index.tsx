import { Button, useColorMode } from '@chakra-ui/react'

export const ToggleTheme = () => {
	const { colorMode, toggleColorMode } = useColorMode()
	const isDark = colorMode === 'dark'

	return (
		<Button data-testid='button' onClick={toggleColorMode}>Change Theme</Button>
	)
}
