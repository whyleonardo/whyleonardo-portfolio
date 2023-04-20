import { IconButton, chakra } from '@chakra-ui/react'
import { InstagramLogo } from '@phosphor-icons/react'

const InstagramIcon = chakra(InstagramLogo)

export const Instagram = () => {
	return (
		<IconButton
			as="a"
			aria-label="Github Icon"
			href="https://instagram.com/whyleonardo_"
			icon={<InstagramIcon />}
			target="_blank"
		/>
	)
}
