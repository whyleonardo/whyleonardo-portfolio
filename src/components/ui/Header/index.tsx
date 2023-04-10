import { LocaleSwitcher } from '@/components/buttons/LocaleSwitcher'
import { ToggleTheme } from '@/components/buttons/ToggleTheme'
import { Logo } from '@/components/ui/Logo'

import { HStack, Stack } from '@chakra-ui/react'

export const Header = () => {
	return (
		<HStack
			justifyContent="space-between"
			h="4rem"
			px="4rem"
			shadow="0px 1px 3px rgba(0,0,0,0.6)"
		>
			<Stack>
				<Logo />
			</Stack>

			<HStack spacing="8">
				<ToggleTheme />
				<LocaleSwitcher />
			</HStack>
		</HStack>
	)
}
