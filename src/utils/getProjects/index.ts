import { client } from '@/services/sanity-client'
import { Project } from '@/types/project'

export async function getProjects() {
	const projects: Project[] = await client.fetch(`
	*[_type == "project"] {
  ...,
  stack[] -> {
    name,
		_id,
		color
  }
}`)

	return projects
}
