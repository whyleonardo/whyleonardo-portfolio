// import useTranslation from 'next-translate/useTranslation'
import { GetStaticProps } from 'next'
import Head from 'next/head'

import { TechBadge } from '@/components/ui/TechBadge'

import { PageLayout } from '@/layouts/PageLayout'
import { Project } from '@/types/project'
import { getProjects } from '@/utils/getProjects'

export default function Home({ projects }: { projects: Project[] }) {
	// const { t } = useTranslation('common')
	// const count = t('count', { count: 42 })
	// const title = t('title')

	return (
		<>
			<Head>
				<title>Christian | Portfólio</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			{/* <Center h="100vh">
				<p>{count}</p>
				<p>{title}</p>
			</Center> */}

			{/* {projects.map((project) => (
				<div key={project._id}>
					<p>{project.title}</p>

					{project.stack.map((tech) => (
						<TechBadge key={tech._id} tech={tech} />
					))}
				</div>
			))} */}

			<PageLayout />
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const projects = await getProjects()
	return {
		props: { projects }
	}
}
