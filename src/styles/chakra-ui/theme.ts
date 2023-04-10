import { components } from './components'

import { foundations } from './foundations'

import { extendBaseTheme } from '@chakra-ui/react'

const config = {
	initialColorMode: 'dark',
	useSystemColorMode: false,
	disableTransitionOnChange: false
}

const { colors } = foundations

const overrides = {
	config,
	colors,
	components
}

export const theme = extendBaseTheme(overrides)
