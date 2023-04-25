import { IconButton, chakra } from '@chakra-ui/react'
import { LinkedinLogo } from '@phosphor-icons/react'

const LinkedinIcon = chakra(LinkedinLogo)

export const Linkedin = () => {
	return (
		<IconButton
			as="a"
			bg="none"
			_hover={{ bg: 'none' }}
			aria-label="Linkedin Icon"
			href="https://linkedin.com/in/christianlsb"
			icon={<LinkedinIcon size={30} />}
			target="_blank"
		/>
	)
}
