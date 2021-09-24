import React from 'react';
import Hero from '../components/hero/Hero';
import HeroIllustration from '../components/hero/HeroIllustration';

import { infos } from '../_helpers/constants';

export default function IndexPage() {
	return (
		<Hero
			title={ infos.heroTitle }
			content={ infos.heroText }
			illustration={HeroIllustration}
		/>
	);
}
