import { Flex } from '@chakra-ui/react'

export const Footer = () => {
	return (
		<Flex
			as="footer"
			w="full"
			minH="20rem"
			_dark={{ bgColor: 'brand.800' }}
			bgColor="brand.700"
			roundedTop="md"
		></Flex>
	)
}
