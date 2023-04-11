import { IconButton, chakra } from '@chakra-ui/react'
import { LinkedinLogo } from '@phosphor-icons/react'

const LinkedinIcon = chakra(LinkedinLogo)

export const Linkedin = () => {
	return <IconButton aria-label="Linkedin Icon" icon={<LinkedinIcon />} />
}
