import { IconButton, chakra } from '@chakra-ui/react'
import { GithubLogo } from '@phosphor-icons/react'

const GithubIcon = chakra(GithubLogo)

export const Github = () => {
	return (
		<IconButton
			as="a"
			bg="none"
			_hover={{ bg: 'none' }}
			aria-label="Github Icon"
			href="https://github.com/whyleonardo"
			icon={<GithubIcon size={30} />}
			target="_blank"
		/>
	)
}
