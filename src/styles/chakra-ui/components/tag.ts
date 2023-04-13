import { ComponentStyleConfig } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

const { Tag } = chakraTheme.components

const ThemedTag: ComponentStyleConfig = {
	...Tag
}

export default ThemedTag
