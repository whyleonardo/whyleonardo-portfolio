import { LocaleSwitcher } from '@/components/buttons/LocaleSwitcher'
import { ToggleTheme } from '@/components/buttons/ToggleTheme'
import { SectionsLinks } from '@/components/navbar/SectionsLinks'
import { Logo } from '@/components/ui/Logo'
import { MobileMenu } from '@/components/ui/MobileMenu'

import { HStack, Stack, Spacer } from '@chakra-ui/react'

export const Header = () => {
	return (
		<HStack
			as={'header'}
			justifyContent="space-between"
			alignSelf="end"
			h="4rem"
			px="2rem"
			shadow="md"
		>
			<Stack>
				<Logo />
			</Stack>

			<HStack display={{ base: 'none', md: 'flex' }} spacing="4">
				<SectionsLinks />

				<Spacer mr="4" />

				<LocaleSwitcher />
				<ToggleTheme />
			</HStack>

			<MobileMenu />
		</HStack>
	)
}
