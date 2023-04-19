import useTranslation from 'next-translate/useTranslation'

import { ProfilePhoto } from '@/components/ui/ProfilePhoto'

import { personalInfoStore } from '@/store/personalInfo'
import { Heading, Flex, Button, useColorMode, chakra } from '@chakra-ui/react'
import { NavigationArrow } from '@phosphor-icons/react'
import { useAtom } from 'jotai'
const NavigationArrowIcon = chakra(NavigationArrow)

export const HomeSection = () => {
	const [personalInfo] = useAtom(personalInfoStore)
	const { colorMode } = useColorMode()

	const { t } = useTranslation('common')

	const isDark = colorMode === 'dark'
	return (
		<Flex
			align="center"
			direction={{ base: 'column', lg: 'row' }}
			gap={{ base: '4', lg: '12' }}
			pt={{ lg: '5rem' }}
		>
			<Heading
				display={{ base: 'block', md: 'none' }}
				fontSize="3xl"
				fontWeight="thin"
				letterSpacing="wider"
				textTransform="uppercase"
				whiteSpace="nowrap"
			>
				{personalInfo.name}
			</Heading>

			<ProfilePhoto profilePhoto={personalInfo?.profilePhoto} />

			<Flex align="center" direction="column" gap="2">
				<Heading
					display={{ base: 'none', md: 'block' }}
					fontSize="5xl"
					fontWeight="thin"
					letterSpacing="wider"
					textTransform="uppercase"
					whiteSpace="nowrap"
				>
					{personalInfo.name}
				</Heading>

				<Heading
					maxW="28rem"
					fontSize="2.5rem"
					fontWeight="light"
					textAlign="center"
					wordBreak="break-word"
				>
					{t('home-section.developer')}
				</Heading>

				<Button
					alignItems="center"
					gap="0.5rem"
					display="flex"
					minW="10rem"
					mt="1rem"
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

					<NavigationArrowIcon
						transform="rotate(90deg)"
						size={20}
						weight="bold"
					/>
				</Button>
			</Flex>
		</Flex>
	)
}
