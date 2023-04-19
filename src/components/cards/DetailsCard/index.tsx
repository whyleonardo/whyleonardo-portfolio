import useTranslation from 'next-translate/useTranslation'

import { Heading, Text, VStack, Box, chakra, Flex } from '@chakra-ui/react'

export const DetailsCard = ({ detail }: { detail: any }) => {
	const { t } = useTranslation('common')

	const Icon = chakra(detail.icon)

	return (
		<VStack gap="2" w="100%" p="8" rounded="5px">
			<Flex
				pos="relative"
				align="center"
				justify="center"
				w="3rem"
				h="3rem"
				transform="auto"
				bgColor="brand.600"
				rotate="45deg"
				rounded="15px"
			>
				<Box transform="auto" rotate="-45deg">
					<Icon pos="relative" zIndex="2" size={35} />
				</Box>
			</Flex>

			<Heading textAlign="center" size="md">
				{t(`about-section.${detail.title}.title`)}
			</Heading>
			<Text fontSize="lg" textAlign="center" opacity="0.9">
				{t(`about-section.${detail.title}.description`)}
			</Text>
		</VStack>
	)
}
