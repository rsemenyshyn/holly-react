import React from 'react';
import LayoutContext from '../layouts/LayoutContext';

import { loadBlogPages, loadBlogInfo } from '../_helpers/api';

let blogRequested = false;
export function useNotionBlog() {

	const context = React.useContext(LayoutContext);
	const [pages, setPages] = React.useState(context.blog);
	const [info, setInfo] = React.useState(context.info);

	React.useEffect(() => {
		if (!Array.isArray(pages) || (Array.isArray(pages) && !pages.length)) {
			if (!blogRequested) {
				blogRequested = true;
				loadBlogPages().then(resp => {
					if (resp && resp.results && Array.isArray(resp.results) && resp.results.length) {
						context.updateBlog(resp.results, blog => setPages(blog));
					}
				});
				loadBlogInfo().then(resp => {
					context.updateInfo(resp, blog => setInfo(blog));
				});
			}
		}
	});

	React.useEffect(() => {
		if (context) {
			setInfo(context.info);
			setPages(context.blog);
		}
	}, [context]);

	return { pages: pages, info: info };
}
