import useTranslation from 'next-translate/useTranslation'

import {
	VStack,
	Heading,
	Text,
	Icon,
	Stack,
	StackDivider,
	CloseButton
} from '@chakra-ui/react'
import { CheckCircle } from '@phosphor-icons/react'

export const SendEmailToast = ({ onClose }: { onClose: () => void }) => {
	const { t } = useTranslation('common')

	return (
		<VStack
			align="start"
			w="25rem"
			p="4"
			bg="white"
			borderTop="4px"
			borderTopColor="green.400"
			_dark={{ bg: 'brand.800', borderTopColor: 'brand.200' }}
			divider={<StackDivider opacity="0.1" borderColor="brand.200" />}
			rounded="10px"
		>
			<Stack
				alignItems="center"
				justifyContent="space-between"
				direction="row"
				w="full"
			>
				<Stack alignItems="center" direction="row">
					<Icon
						as={CheckCircle}
						w={30}
						h={30}
						color="green.400"
						_dark={{ color: 'brand.200' }}
					/>
					<Heading
						color="green.400"
						textAlign="start"
						_dark={{ color: 'brand.200' }}
						size="md"
					>
						{t('contact-section.toast.title')}
					</Heading>
				</Stack>

				<CloseButton onClick={onClose} />
			</Stack>
			<Text fontWeight="medium">{t('contact-section.toast.text')}</Text>
		</VStack>
	)
}
