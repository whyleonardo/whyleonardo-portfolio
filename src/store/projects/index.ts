import { Project } from '@/types/project'
import { atom } from 'jotai'

export const projectsStore = atom([] as Project[])
