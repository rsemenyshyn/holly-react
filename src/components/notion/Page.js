import React from 'react';
import PropTypes from 'prop-types';

import { loadBlogArticle } from '../../_helpers/api';

const Page = ({ id, onLoad }) => {

	const [page, setPage] = React.useState(null);

	React.useEffect(() => {
		if (!page) {
			loadBlogArticle(id).then(p => {
				console.log('notion page: ', p);
				setPage(p);
				if (onLoad) {
					const img = p.cover && p.cover.external && p.cover.external.url ? p.cover.external.url : '';
					const title = p.properties['Name'].title.length ? p.properties['Name'].title[0].plain_text : '';
					const tags = p.properties.tags ? p.properties.tags.multi_select : [];
					const date = p.properties['Created'] ? p.properties['Created'].created_time : '';
					onLoad({ img, title, tags, date });
				}
			});
		}
	}, [page, id]);

	return page ? (
		<></>
	) : '';
};
Page.propTypes = {
	id: PropTypes.string,
	onLoad: PropTypes.func,
};
export default Page;
