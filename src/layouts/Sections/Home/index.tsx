import { ProfilePhoto } from '@/components/ui/ProfilePhoto'

import { personalInfoStore } from '@/store/personalInfo'
import { useAtom } from 'jotai'

export const Home = () => {
	const [personalInfo] = useAtom(personalInfoStore)
	return <ProfilePhoto profilePhoto={personalInfo?.profilePhoto} />
}
