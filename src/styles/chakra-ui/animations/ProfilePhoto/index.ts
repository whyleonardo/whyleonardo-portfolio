import { keyframes } from '@chakra-ui/react'

const blobImage = keyframes`
	0% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
	50% { border-radius: 30% 60% 70% 40%/50% 60% 30% 60%; }
	100% { border-radius: 60% 40% 30% 70%/60% 30% 70% 40%; }
	`

const animation = `${blobImage} 8s ease-in-out infinite 1s`

export { animation }
