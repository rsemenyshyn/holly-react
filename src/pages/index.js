import React from 'react';
import Layout from '../layouts/index';
import Hero from '../components/hero/Hero';
import HeroIllustration from '../components/hero/HeroIllustration';

import { infos } from '../_helpers/constants';

export default function IndexPage() {
	return (
		<Layout>
			<Hero
				title={ infos.heroTitle }
				content={ infos.heroText }
				illustration={HeroIllustration}
			/>
		</Layout>
	);
}
