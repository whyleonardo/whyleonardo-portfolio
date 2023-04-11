import { ComponentStyleConfig } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

const { Drawer } = chakraTheme.components

const ThemedDrawer: ComponentStyleConfig = {
	...Drawer
}

export default ThemedDrawer
