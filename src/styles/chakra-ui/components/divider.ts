import { ComponentStyleConfig } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

const { Divider } = chakraTheme.components

const ThemedDivider: ComponentStyleConfig = {
	...Divider
}

export default ThemedDivider
