import { IconButton, chakra } from '@chakra-ui/react'
import { LinkedinLogo } from '@phosphor-icons/react'

const LinkedinIcon = chakra(LinkedinLogo)

export const Linkedin = () => {
	return (
		<IconButton
			as="a"
			aria-label="Linkedin Icon"
			href="https://linkedin.com/in/christianlsb"
			icon={<LinkedinIcon />}
			target="_blank"
		/>
	)
}
