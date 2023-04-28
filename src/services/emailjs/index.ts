import { SendEmailFormData } from '@/components/form/SendEmailForm'

import emailjs from '@emailjs/browser'

const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string
const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY as string

export async function sendEmailJs(data: SendEmailFormData) {
	emailjs.send(serviceID, templateID, data, publicKey)
}
