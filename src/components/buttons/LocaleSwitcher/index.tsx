import { useRouter } from 'next/router'
import { ReactCountryFlag } from 'react-country-flag'

import { IconButton, Flex, chakra } from '@chakra-ui/react'

const ChakraFlag = chakra(ReactCountryFlag)

export const LocaleSwitcher = () => {
	const router = useRouter()
	const { locales, locale: activeLocale } = router

	function handleChangeLocale(locale: string) {
		router.push({}, undefined, {
			scroll: false,
			locale: locale
		})
	}
	return (
		<Flex gap="2">
			{locales &&
				locales.map((locale) => (
					<IconButton
						key={locale}
						bg="none"
						_hover={{ bg: 'none' }}
						aria-label={`${locale} Flag`}
						icon={
							<ChakraFlag
								fontSize={35}
								countryCode={locale.slice(3)}
								transition="all 250ms"
								_hover={{ filter: 'grayscale(0%)' }}
								filter={
									activeLocale !== locale ? 'grayscale(100%)' : 'grayscale(0%)'
								}
								svg
							/>
						}
						onClick={() => handleChangeLocale(locale)}
					></IconButton>
				))}
		</Flex>
	)
}
