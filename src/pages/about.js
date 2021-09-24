import React from 'react';
import { Article, ArticleContent, ArticleMedia } from '../components/layout/Article';

export default function AboutPage() {
	return (
		<Article>
			<ArticleContent title="About">
				<p>
						Holly is a free HTML/CSS landing page designed and developed by
						@pacovitiello and @DavidePacilio!
				</p>
				<p>
						Holly is suitable for all kind of startups, it&apos;s easily
						customizable, and it&apos;s downloadable for personal and commercial use.
				</p>
				<p>This template is distributed under the MIT License.</p>
			</ArticleContent>

			<ArticleMedia>
				<img
					src="https://picsum.photos/420/640?grayscale"
					alt="Lorem Picsum"
				/>
			</ArticleMedia>
		</Article>
	);
}
