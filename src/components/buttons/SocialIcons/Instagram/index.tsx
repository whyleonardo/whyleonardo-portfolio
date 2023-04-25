import { IconButton, chakra } from '@chakra-ui/react'
import { InstagramLogo } from '@phosphor-icons/react'

const InstagramIcon = chakra(InstagramLogo)

export const Instagram = () => {
	return (
		<IconButton
			as="a"
			bg="none"
			_hover={{ bg: 'none' }}
			aria-label="Github Icon"
			href="https://instagram.com/whyleonardo_"
			icon={<InstagramIcon size={30} />}
			target="_blank"
		/>
	)
}
