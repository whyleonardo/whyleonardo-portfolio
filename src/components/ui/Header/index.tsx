import { LocaleSwitcher } from '@/components/buttons/LocaleSwitcher'
import { ToggleTheme } from '@/components/buttons/ToggleTheme'

import { HStack } from '@chakra-ui/react'

export const Header = () => {
	return (
		<HStack>
			<ToggleTheme />
			<LocaleSwitcher />
		</HStack>
	)
}
