import { keyframes } from '@chakra-ui/react'

const growBar = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
	`

const animation = `${growBar} 1 250ms ease-in-out`

export { animation }
