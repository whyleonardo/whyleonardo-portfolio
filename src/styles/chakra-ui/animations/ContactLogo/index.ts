import { keyframes } from '@chakra-ui/react'

const UpAndDown = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(20px); }
  100% { transform: translateY(0); }
	`

const animation = `${UpAndDown} 3s ease-in-out infinite 1s`

export { animation }
