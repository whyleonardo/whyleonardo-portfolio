import useTranslation from 'next-translate/useTranslation'

import { Github } from '@/components/buttons/SocialIcons/Github'
import { Instagram } from '@/components/buttons/SocialIcons/Instagram'
import { Linkedin } from '@/components/buttons/SocialIcons/Linkedin'

import { animation } from '@/styles/chakra-ui/animations/ContactLogo'
import { Flex, Text, Heading, VStack, chakra, Box } from '@chakra-ui/react'
import { Code } from '@phosphor-icons/react'

const CodeIcon = chakra(Code)

export const ContactSection = () => {
	const { t } = useTranslation('common')

	return (
		<Flex
			pos="relative"
			justify="space-between"
			direction={{ base: 'column', lg: 'row' }}
			p={{ lg: '20' }}
		>
			<VStack align="start" justify={{ lg: 'center' }} gap="5" w="full" p="8">
				<Heading size="2xl">{t('contact-section.title')}</Heading>

				<Text w="50%" opacity="0.9">
					{t('contact-section.text')}
				</Text>

				<Flex
					direction={{ base: 'column', lg: 'row' }}
					gap={{ base: '5', lg: '10' }}
				>
					<VStack align="start">
						<Text as="strong">{t('contact-section.mail')}</Text>
						<Text pt="1" fontSize="lg" opacity="0.9">
							christian.batista216@gmail.com
						</Text>
					</VStack>

					<VStack align="start">
						<Text as="strong">{t('contact-section.follow')}</Text>

						<Flex>
							<Linkedin />
							<Github />
							<Instagram />
						</Flex>
					</VStack>
				</Flex>
			</VStack>

			<Flex
				// align="start"
				justify={{ lg: 'center' }}
				display={{ base: 'none', lg: 'flex' }}
				w="full"
				h="full"
			>
				<CodeIcon size={250} animation={animation} />
			</Flex>
		</Flex>
	)
}
