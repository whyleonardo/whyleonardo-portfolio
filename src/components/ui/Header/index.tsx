import { LocaleSwitcher } from '@/components/buttons/LocaleSwitcher'
import { ToggleTheme } from '@/components/buttons/ToggleTheme'
import { SectionsLinks } from '@/components/nav/SectionsLinks'
import { Logo } from '@/components/ui/Logo'
import { MobileMenu } from '@/components/ui/MobileMenu'

import { HStack, Stack, Spacer } from '@chakra-ui/react'

export const Header = ({ activeSection }: { activeSection: string | null }) => {
	return (
		<HStack
			as={'header'}
			pos="sticky"
			zIndex="500"
			top="0"
			justifyContent="space-between"
			alignSelf="end"
			h="4rem"
			px="2rem"
			shadow="md"
			_dark={{ bgColor: 'brand.900' }}
			bgColor={'brand.100'}
		>
			<Stack>
				<Logo />
			</Stack>

			<HStack display={{ base: 'none', lg: 'flex' }} spacing="4">
				<SectionsLinks activeSection={activeSection} />

				<Spacer mr="4" />

				<LocaleSwitcher />
				<ToggleTheme />
			</HStack>

			<MobileMenu />
		</HStack>
	)
}
