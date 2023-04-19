import { sanityImageBuilder } from '@/services/sanity-client'
import { animation } from '@/styles/chakra-ui/animations/ProfilePhoto'
import { PersonalInfo } from '@/types/personal-info'
import { Image } from '@chakra-ui/react'

type ProfilePhotoProps = Pick<PersonalInfo, 'profilePhoto'>

export const ProfilePhoto = ({ profilePhoto }: ProfilePhotoProps) => {
	const image = sanityImageBuilder.image(profilePhoto).url()

	return (
		<Image
			w={{ base: '15rem', md: '17rem', lg: '22rem' }}
			h={{ base: '15rem', md: '17rem', lg: '22rem' }}
			border="6px solid"
			borderColor="rgba(80, 70, 80, 0.2)"
			_hover={{ filter: 'grayscale(0%)' }}
			_dark={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}
			animation={animation}
			transition="all 300ms"
			alt="Profile Photo"
			filter="grayscale(100%)"
			rounded="60% 40% 30% 70%/60% 30% 70% 40%"
			src={image}
		/>
	)
}
