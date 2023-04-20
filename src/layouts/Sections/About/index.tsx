import useTranslation from 'next-translate/useTranslation'
import { Shadows_Into_Light } from 'next/font/google'

import { DetailsCard } from '@/components/cards/DetailsCard'

import { details } from '@/constants/details'
import { Text, VStack, StackDivider, Stack } from '@chakra-ui/react'

const shadowFont = Shadows_Into_Light({ subsets: ['latin'], weight: '400' })

export const AboutSection = () => {
	const { t } = useTranslation('common')
	return (
		<VStack mt="2rem">
			<VStack gap="4" mb="2">
				<Text
					maxW={{ base: 'full', lg: '50%' }}
					fontSize="larger"
					textAlign="center"
					opacity="0.8"
				>
					{t('about-section.description')}
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

			<Stack
				direction={{ base: 'column', lg: 'row' }}
				py="1"
				shadow="0 5px 10px rgba(0, 0, 0, 0.12), 0 3px 6px rgba(0, 0, 0, 0.10)"
				_dark={{ bgColor: 'brand.800' }}
				divider={
					<StackDivider
						alignSelf="center"
						w={{ base: '80%', lg: 0 }}
						h={{ base: 0, lg: '60%' }}
						opacity="0.2"
						borderColor="brand.800"
						_dark={{
							borderColor: 'brand.100',
							opacity: '0.1'
						}}
					/>
				}
				rounded="10px"
			>
				{details.map((detail) => (
					<DetailsCard key={detail.id} detail={detail} />
				))}
			</Stack>
		</VStack>
	)
}
