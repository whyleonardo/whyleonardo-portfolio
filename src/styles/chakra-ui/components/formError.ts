import { ComponentStyleConfig } from '@chakra-ui/react'
import chakraTheme from '@chakra-ui/theme'

const { FormError } = chakraTheme.components

const ThemedFormError: ComponentStyleConfig = {
	...FormError
}

export default ThemedFormError
