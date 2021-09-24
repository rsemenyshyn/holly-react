import React from 'react';

import Card from '../layout/Card';
import { notionPageToObj } from '../../_helpers/api_mapping';
import { useNotionBlog } from '../../_hooks/useNotionBlog';

const Blog = () => {

	const pages = useNotionBlog();

	return (
		<div className="grid grid-flow-col grid-cols-2 gap-4">
			{ pages.map(p => {
				const obj = notionPageToObj(p);
				return (
					<div key={p.id}>
						<Card url={obj.url} image={obj.img} title={obj.title} tags={obj.tags} date={obj.date}/>
					</div>
				);
			})}
		</div>
	);
};

export default Blog;
