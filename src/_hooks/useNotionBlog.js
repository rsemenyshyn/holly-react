import React from 'react';
import LayoutContext from '../layouts/LayoutContext';

import { loadBlogPages } from '../_helpers/api';

export function useNotionBlog() {

	const context = React.useContext(LayoutContext);

	const [pages, setPages] = React.useState([]);
	React.useEffect(() => {
		if (!Array.isArray(pages) || (Array.isArray(pages) && !pages.length)) {
			loadBlogPages().then(resp => {
				if (resp && resp.results && Array.isArray(resp.results) && resp.results.length) {
					context.updateBlog(resp.results, blog => setPages(blog));
				}
			});
		}
	}, [pages, context]);

	return pages;
}
