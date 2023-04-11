import { Tech } from '@/types/tech'

export type Project = {
	_id: string
	cover: { _type: string; asset: [object] }
	dateWasCreated: string
	github: string
	isCompleted: boolean
	link: string
	title: string
	stack: Tech[]
}
