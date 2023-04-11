import { IconButton, chakra } from '@chakra-ui/react'
import { GithubLogo } from '@phosphor-icons/react'

const GithubIcon = chakra(GithubLogo)

export const Github = () => {
	return <IconButton aria-label="Github Icon" icon={<GithubIcon />} />
}
