import { ComponentStyleConfig } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

const { Badge } = chakraTheme.components

const ThemedBadge: ComponentStyleConfig = {
	...Badge
}

export default ThemedBadge
