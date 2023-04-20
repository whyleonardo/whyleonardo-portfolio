import { Github } from '@/components/buttons/SocialIcons/Github'
import { Instagram } from '@/components/buttons/SocialIcons/Instagram'
import { Linkedin } from '@/components/buttons/SocialIcons/Linkedin'

import { Flex, Text, Heading, VStack } from '@chakra-ui/react'

export const ContactSection = () => {
	return (
		<Flex
			justify="space-between"
			direction={{ base: 'column', lg: 'row' }}
			p="6"
			border="1px"
		>
			<VStack align="start" gap="14" w="full" border="1px">
				<Heading>Just say hi.</Heading>

				<Text w="50%">
					Im always open to discuss your project and talk about new things.
				</Text>

				<Flex gap="10">
					<VStack align="start">
						<Text>Mail me at</Text>
						<Text>christian.batista216@gmail.com</Text>
					</VStack>

					<VStack align="start">
						<Text>Follow Me</Text>

						<Flex>
							<Linkedin />
							<Github />
							<Instagram />
						</Flex>
					</VStack>
				</Flex>
			</VStack>

			<Flex w="full" h="full" border="1px"></Flex>
		</Flex>
	)
}
