import { sanityImageBuilder } from '@/services/sanity-client'
import { animation } from '@/styles/chakra-ui/animations/ProfilePhoto'
import { PersonalInfo } from '@/types/personal-info'
import { Image } from '@chakra-ui/next-js'

type ProfilePhotoProps = Pick<PersonalInfo, 'profilePhoto'>

export const ProfilePhoto = ({ profilePhoto }: ProfilePhotoProps) => {
	const image = sanityImageBuilder.image(profilePhoto).url()

	return (
		<Image
			animation={animation}
			rounded="60% 40% 30% 70%/60% 30% 70% 40%"
			width={200}
			height={200}
			alt="Profile Photo"
			src={image}
			priority
		/>
	)
}
