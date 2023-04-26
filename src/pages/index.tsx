import { GetStaticProps } from 'next'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'

import { PageLayout } from '@/layouts/PageLayout'
import { personalInfoStore } from '@/store/personalInfo'
import { projectsStore } from '@/store/projects'
import { PersonalInfo } from '@/types/personal-info'
import { Project } from '@/types/project'
import { getPersonalInfo } from '@/utils/getPersonalInfo'
import { getProjects } from '@/utils/getProjects'
import { useHydrateAtoms } from 'jotai/utils'

export default function Home({
	projects,
	personalInfo
}: {
	projects: Project[]
	personalInfo: PersonalInfo
}) {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	useHydrateAtoms([[projectsStore, projects]])

	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	useHydrateAtoms([[personalInfoStore, personalInfo]])

	const { t } = useTranslation('common')

	return (
		<>
			<Head>
				<title>{t('page-seo.title')}</title>
				<meta name="description" content={t('page-seo.description')} />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<PageLayout />
		</>
	)
}

export const getStaticProps: GetStaticProps = async () => {
	const projects = await getProjects()

	const personalInfo = await getPersonalInfo()

	return {
		props: { projects, personalInfo },
		revalidate: 86400 // 24 hours
	}
}
