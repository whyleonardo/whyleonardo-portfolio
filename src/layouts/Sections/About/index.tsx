import useTranslation from 'next-translate/useTranslation'
import { Shadows_Into_Light } from 'next/font/google'

import { DetailsCard } from '@/components/cards/DetailsCard'

import { Text, Flex, VStack } from '@chakra-ui/react'

const shadowFont = Shadows_Into_Light({ subsets: ['latin'], weight: '400' })

const details = [
	{
		title: 'Look Professional',
		description: 'Nice and clean design with cohesive and unique style',
		icon: 'fire',
		id: 'udfkdfldkm31f'
	},
	{
		title: 'Are responsive',
		description: 'Sites that work with any screen size',
		icon: 'cellphone',
		id: 'udfasdqwkdfldkmf'
	},
	{
		title: 'Load fast!',
		description: 'Built with full focus on performance',
		icon: 'lighting',
		id: 'udfkdjrkswrfldkmf'
	}
]

export const AboutSection = () => {
	const { t } = useTranslation('common')
	return (
		<VStack gap="4" py={{ base: '2rem', md: '5rem' }}>
			<VStack gap="2">
				<Text
					maxW={{ base: 'full', lg: '50%' }}
					fontSize={{ base: 'lg', lg: 'xl' }}
					textAlign="center"
					opacity="0.8"
				>
					{t('about-section.description')}{' '}
				</Text>
				<Text
					color="transparent"
					fontFamily={shadowFont.style.fontFamily}
					fontSize={{ base: '3xl', lg: '4xl' }}
					letterSpacing="wide"
					textTransform="uppercase"
					bgGradient="linear(to-r, brand.600, brand.700)"
					bgClip="text"
				>
					{t('about-section.site-phrase')}
				</Text>
			</VStack>

			<Flex border="1px">
				{details.map((detail) => (
					<DetailsCard key={detail.id} detail={detail} />
				))}
			</Flex>
		</VStack>
	)
}
