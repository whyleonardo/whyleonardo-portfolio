import useTranslation from 'next-translate/useTranslation'

import { ProfilePhoto } from '@/components/ui/ProfilePhoto'

import { personalInfoStore } from '@/store/personalInfo'
import { Heading, Stack, Button, useColorMode, chakra } from '@chakra-ui/react'
import { NavigationArrow } from '@phosphor-icons/react'
import { useAtom } from 'jotai'

const NavigationArrowIcon = chakra(NavigationArrow)

export const HomeSection = () => {
	const [personalInfo] = useAtom(personalInfoStore)
	const { colorMode } = useColorMode()

	const { t } = useTranslation('common')

	const isDark = colorMode === 'dark'
	return (
		<Stack
			align="center"
			justifyContent={{ md: 'space-between' }}
			direction={{ base: 'column', md: 'row' }}
			gap={{ base: '4', md: '12' }}
			px="0.5rem"
		>
			<Heading
				display={{ base: 'block', md: 'none' }}
				fontSize="2xl"
				fontWeight="thin"
				letterSpacing="wider"
				textTransform="uppercase"
				whiteSpace="nowrap"
			>
				{personalInfo.name}
			</Heading>

			<ProfilePhoto profilePhoto={personalInfo?.profilePhoto} />

			<Stack alignItems="center" spacing="6">
				<Heading
					display={{ base: 'none', md: 'block' }}
					fontSize="4xl"
					fontWeight="thin"
					letterSpacing="wider"
					textTransform="uppercase"
					whiteSpace="nowrap"
				>
					{personalInfo.name}
				</Heading>

				<Heading
					maxW="28rem"
					mt="4"
					fontSize="3xl"
					fontWeight="light"
					textAlign="center"
				>
					{t('home-section.developer')}
				</Heading>

				<Button
					alignItems="center"
					gap="0.5rem"
					display="flex"
					minW="10rem"
					fontWeight="bold"
					letterSpacing="widest"
					textTransform="uppercase"
					border="1px"
					_hover={{
						bgColor: isDark ? 'brand.100' : 'brand.900',
						color: isDark ? 'brand.900' : 'brand.100'
					}}
					bgColor="transparent"
					rounded="9999px"
				>
					{t('home-section.hello')}

					<NavigationArrowIcon transform="rotate(90deg)" weight="bold" />
				</Button>
			</Stack>
		</Stack>
	)
}
