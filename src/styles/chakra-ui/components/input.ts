import { ComponentStyleConfig } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

const { Input } = chakraTheme.components

const ThemedInput: ComponentStyleConfig = {
	...Input
}

export default ThemedInput
