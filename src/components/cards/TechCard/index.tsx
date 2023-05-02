import { techs } from '@/constants/techs'
import { Flex, Heading, chakra } from '@chakra-ui/react'

type TechCardProps = (typeof techs)[0]

export const TechCard = ({ tech }: { tech: TechCardProps }) => {
	const Icon = chakra(tech.icon)

	return (
		<Flex
			key={tech.name}
			align="center"
			justify={{ base: 'center', lg: 'flex-start' }}
			gap="4"
			w="full"
			p="4"
			shadow="md"
			_dark={{ bgColor: 'brand.800' }}
			bgColor="white"
			rounded="5px"
		>
			<Icon size={40} />
			<Heading fontWeight="normal" size="xl">
				{tech.name}
			</Heading>
		</Flex>
	)
}
