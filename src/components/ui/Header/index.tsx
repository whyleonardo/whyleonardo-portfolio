import { LocaleSwitcher } from '@/components/buttons/LocaleSwitcher'
import { ToggleTheme } from '@/components/buttons/ToggleTheme'
import { SectionsLinks } from '@/components/navbar/SectionsLinks'
import { Logo } from '@/components/ui/Logo'

import { HStack, Stack, Spacer } from '@chakra-ui/react'

export const Header = () => {
	return (
		<HStack
			as={'header'}
			justifyContent="space-between"
			h="4rem"
			px="2rem"
			shadow="0px 1px 2px rgba(0,0,0,0.6)"
		>
			<Stack>
				<Logo />
			</Stack>

			<HStack spacing="4">
				<SectionsLinks />

				<Spacer mr="4" />

				<LocaleSwitcher />
				<ToggleTheme />
			</HStack>
		</HStack>
	)
}
