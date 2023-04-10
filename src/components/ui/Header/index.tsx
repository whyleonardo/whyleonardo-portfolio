import { LocaleSwitcher } from '@/components/buttons/LocaleSwitcher'
import { ToggleTheme } from '@/components/buttons/ToggleTheme'
import { Logo } from '@/components/ui/Logo'

import { HStack } from '@chakra-ui/react'

export const Header = () => {
	return (
		<HStack>
			<Logo />
			<ToggleTheme />
			<LocaleSwitcher />
		</HStack>
	)
}
