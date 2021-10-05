import React from 'react';
import Hero from '../components/hero/Hero';
import HeroIllustration from '../components/hero/HeroIllustration';

import { infos } from '../_helpers/constants';
import { useNotionBlog } from '../_hooks/useNotionBlog';
import { notionDatabaseToObj } from '../_helpers/api_mapping';
import Seo from '../components/basic/Seo';

export default function IndexPage() {

	const pages = useNotionBlog();
	const data = pages.info ? notionDatabaseToObj(pages.info) : null;

	return (
		<>
			<Seo
				image={ data ? data.img : null }
				description={'text'}
				title={ data ? data.title : infos.heroTitle }
			/>
			<Hero
				title={ data ? data.title : infos.heroTitle }
				content={ data ? data.description : infos.heroText }
				illustration={HeroIllustration}
			/>
		</>
	);
}
