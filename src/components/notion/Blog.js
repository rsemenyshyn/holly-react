import React from 'react';

import { routes } from '../../_helpers/constants';
import { loadBlogPages } from '../../_helpers/api';
import Card from '../layout/Card';

const Blog = () => {
	const [pages, setPages] = React.useState([]);
	React.useEffect(() => {
		if (!Array.isArray(pages) || (Array.isArray(pages) && !pages.length)) {
			loadBlogPages().then(resp => {
				if (resp && resp.results) {
					setPages(resp.results);
				}
			});
		}
	}, [pages]);

	return (
		<div className="grid grid-flow-col grid-cols-2 gap-4">
			{ pages.map(p => {
				const url = routes.PAGE.replace(':id', p.id);
				const img = p.cover && p.cover.external && p.cover.external.url ? p.cover.external.url : '';
				const title = p.properties['Name'].title.length ? p.properties['Name'].title[0].plain_text : '';
				const tags = p.properties.tags ? p.properties.tags.multi_select : [];
				const date = p.properties['Created'] ? p.properties['Created'].created_time : '';
				return (
					<div key={p.id}>
						<Card url={url} image={img} title={title} tags={tags} date={date}/>
					</div>
				);
			})}
		</div>
	);
};

export default Blog;
