import { useRouter } from 'next/router'
import { ReactCountryFlag } from 'react-country-flag'

import { Link } from '@chakra-ui/next-js'
import { Stack, chakra } from '@chakra-ui/react'

const ChakraFlag = chakra(ReactCountryFlag)

export default function LocaleSwitcher() {
	const router = useRouter()
	const { locales, locale: activeLocale } = router

	return (
		<Stack direction="row" spacing="2">
			{locales &&
				locales.map((locale) => (
					<Link
						key={locale}
						href={`/${locale == 'pt-BR' ? '' : locale}`}
						locale={locale}
					>
						<ChakraFlag
							fontSize={50}
							countryCode={locale.slice(3)}
							transition="all 250ms"
							_hover={{ filter: 'grayscale(0%)' }}
							filter={
								activeLocale !== locale ? 'grayscale(100%)' : 'grayscale(0%)'
							}
							svg
						/>
					</Link>
				))}
		</Stack>
	)
}
