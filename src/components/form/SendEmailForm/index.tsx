import useTranslation from 'next-translate/useTranslation'
import { useForm } from 'react-hook-form'

import { SendEmailToast } from '@/components/toast/SendEmailToast'

import { sendEmailJs } from '@/services/emailjs'
import {
	Flex,
	FormErrorMessage,
	FormLabel,
	FormControl,
	Input,
	Button,
	Textarea,
	useToast
} from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const sendEmailFormSchema = z.object({
	name: z.string().nonempty('Name is required'),
	email: z.string().email('Invalid email').nonempty('Email is required'),
	message: z
		.string()
		.min(10, 'Too Short')
		.max(500, 'Too Long')
		.nonempty('Message is required')
})

export type SendEmailFormData = z.infer<typeof sendEmailFormSchema>

export const SendEmailForm = () => {
	const { t } = useTranslation('common')

	const toast = useToast()

	const {
		handleSubmit,
		register,
		resetField,
		formState: { errors, isSubmitting }
	} = useForm<SendEmailFormData>({
		resolver: zodResolver(sendEmailFormSchema)
	})

	function sendEmail(data: SendEmailFormData) {
		sendEmailJs(data).then(() => {
			toast({
				status: 'success',
				duration: 3000,
				position: 'top-right',
				render: ({ onClose }) => <SendEmailToast onClose={onClose} />
			})

			// resetField('name')
			// resetField('email')
			// resetField('message')
		})
	}

	return (
		<Flex
			as="form"
			direction="column"
			gap="4"
			p="6"
			border="1px"
			borderColor="brand.200"
			_dark={{ borderColor: 'gray.700' }}
			action=""
			onSubmit={handleSubmit(sendEmail)}
			rounded="5px"
			style={{ width: '100%' }}
		>
			<FormControl
				flexDir="column"
				display="flex"
				borderColor="brand.200"
				_dark={{ borderColor: 'gray.700' }}
				isInvalid={!!errors.name}
				isRequired
			>
				<FormLabel fontWeight="semibold" htmlFor="name">
					{t('contact-section.form.name')}:
				</FormLabel>
				<Input {...register('name')} type="text" />
				<FormErrorMessage>
					{errors.name && errors.name.message}
				</FormErrorMessage>
			</FormControl>

			<FormControl
				flexDir="column"
				display="flex"
				borderColor="brand.200"
				_dark={{ borderColor: 'gray.700' }}
				isInvalid={!!errors.email}
				isRequired
			>
				<FormLabel fontWeight="semibold" htmlFor="email">
					{t('contact-section.form.email')}:
				</FormLabel>
				<Input {...register('email')} type="email" />
				<FormErrorMessage>
					{errors.email && errors.email.message}
				</FormErrorMessage>
			</FormControl>

			<FormControl
				flexDir="column"
				display="flex"
				borderColor="brand.200"
				_dark={{ borderColor: 'gray.700' }}
				isInvalid={!!errors.message}
				isRequired
			>
				<FormLabel fontWeight="semibold" htmlFor="message">
					{t('contact-section.form.message')}:
				</FormLabel>
				<Textarea resize="none" {...register('message')} />
				<FormErrorMessage>
					{errors.message && errors.message.message}
				</FormErrorMessage>
			</FormControl>

			<Button
				alignSelf="center"
				w={{ lg: '70%' }}
				color="brand.100"
				bg="brand.900"
				_hover={{ opacity: '0.9' }}
				_dark={{
					bg: 'brand.100',
					color: 'brand.900',
					_hover: { opacity: '0.8' }
				}}
				isLoading={isSubmitting}
				type="submit"
			>
				{t('contact-section.form.send')}
			</Button>
		</Flex>
	)
}
