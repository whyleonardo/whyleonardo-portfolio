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
			animation={animation}
			alt="Profile Photo"
			rounded="60% 40% 30% 70%/60% 30% 70% 40%"
			src={image}
		/>
	)
}
