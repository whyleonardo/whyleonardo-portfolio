import { ComponentStyleConfig } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

const { FormLabel } = chakraTheme.components

const ThemedFormLabel: ComponentStyleConfig = {
	...FormLabel
}

export default ThemedFormLabel
