import { ProfilePhoto } from '@/components/ui/ProfilePhoto'

import { personalInfoStore } from '@/store/personalInfo'
import { Stack, Heading, Text } from '@chakra-ui/react'
import { useAtom } from 'jotai'

export const HomeSection = () => {
	const [personalInfo] = useAtom(personalInfoStore)
	return (
		// <Stack h="calc(100vh - 4rem)">
		<>
			<ProfilePhoto profilePhoto={personalInfo?.profilePhoto} />
			<Heading>{personalInfo.name}</Heading>
			<Text>{'Hey'}</Text>
		</>
		// </Stack>
	)
}
