import { client } from '@/services/sanity-client'
import { PersonalInfo } from '@/types/personal-info'

export async function getPersonalInfo() {
	const data: PersonalInfo[] = await client.fetch('*[_type == "personalInfo"]')

	const personalInfo = data.at(0)

	return personalInfo
}
