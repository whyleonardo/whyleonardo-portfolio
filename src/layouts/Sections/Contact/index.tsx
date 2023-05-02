import useTranslation from 'next-translate/useTranslation'

import { Github } from '@/components/buttons/SocialIcons/Github'
import { Instagram } from '@/components/buttons/SocialIcons/Instagram'
import { Linkedin } from '@/components/buttons/SocialIcons/Linkedin'
import { SendEmailForm } from '@/components/form/SendEmailForm'

import { Flex, Text, Heading, VStack } from '@chakra-ui/react'

// const CodeIcon = chakra(Code)

export const ContactSection = () => {
	const { t } = useTranslation('common')

	return (
		<Flex
			pos="relative"
			justify="space-between"
			direction={{ base: 'column', lg: 'row' }}
			p={{ lg: '18' }}
			pb={{ base: '4', lg: '0' }}
		>
			<VStack align="start" justify={{ lg: 'center' }} gap="5" w="full" p="8">
				<Heading size="2xl">{t('contact-section.title')}</Heading>

				<Text w={{ lg: '50%' }} opacity="0.9">
					{t('contact-section.text')}
				</Text>

				<Flex
					direction={{ base: 'column', lg: 'row' }}
					gap={{ base: '5', lg: '10' }}
				>


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

			<Flex align="center" w="full">
				<SendEmailForm />
			</Flex>
		</Flex>
	)
}
