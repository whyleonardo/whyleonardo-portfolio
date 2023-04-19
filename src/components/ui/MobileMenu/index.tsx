import { LocaleSwitcher } from '@/components/buttons/LocaleSwitcher'
import { Github } from '@/components/buttons/Social Icons/Github'
import { Linkedin } from '@/components/buttons/Social Icons/Linkedin'
import { ToggleTheme } from '@/components/buttons/ToggleTheme'
import { SectionsLinks } from '@/components/nav/SectionsLinks'

import {
	chakra,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	useDisclosure,
	IconButton,
	Flex
} from '@chakra-ui/react'
import { X, List } from '@phosphor-icons/react'

const CloseIcon = chakra(X)
const ListIcon = chakra(List)

export const MobileMenu = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<>
			<IconButton
				display={{ lg: 'none' }}
				bg="none"
				_hover={{ bg: 'none' }}
				aria-label="Open Mobile Menu"
				colorScheme="blue"
				icon={
					<ListIcon
						size={40}
						color="brand.900"
						_dark={{ color: 'brand.100' }}
						_hover={{ transform: 'scale(1.1)' }}
						transition="all 300ms"
					/>
				}
				onClick={onOpen}
			/>

			<Drawer isOpen={isOpen} onClose={onClose} size="full">
				<DrawerOverlay />
				<DrawerContent
					display={{ lg: 'none' }}
					_dark={{ bgColor: 'brand.900' }}
					bgColor="brand.100"
				>
					<DrawerHeader
						alignItems="center"
						justifyContent="space-between"
						display="flex"
						shadow="sm"
					>
						{/* <Stack direction="row">
							<Linkedin />
							<Github />
						</Stack> */}

						<Flex direction="row" gap="8">
							<ToggleTheme />
							<LocaleSwitcher />
						</Flex>

						<IconButton
							display={{ lg: 'none' }}
							bg="none"
							_hover={{ bg: 'none' }}
							aria-label="Open Mobile Menu"
							colorScheme="blue"
							icon={
								<CloseIcon
									size={40}
									color="brand.900"
									_dark={{ color: 'brand.100' }}
									_hover={{ transform: 'scale(1.1)' }}
									transition="all 300ms"
								/>
							}
							onClick={onClose}
						/>
					</DrawerHeader>
					<DrawerBody h="90%">
						<SectionsLinks onClose={onClose} />
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</>
	)
}
