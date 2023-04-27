import { ComponentStyleConfig } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

const { Textarea } = chakraTheme.components

const ThemedTextarea: ComponentStyleConfig = {
	...Textarea
}

export default ThemedTextarea
