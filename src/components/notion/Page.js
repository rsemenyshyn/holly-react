import React from 'react';
import PropTypes from 'prop-types';
import { NotionRenderer } from 'react-notion';

import { loadBlogArticleToRender } from '../../_helpers/api';

const Page = ({ id }) => {

	const [page, setPage] = React.useState(null);

	React.useEffect(() => {
		if (page === null) {
			loadBlogArticleToRender(id).then(p => setPage(p ? p : undefined));
		}
	}, [id, page]);

	return page ? (
		<NotionRenderer blockMap={page} />
	) : '';
};
Page.propTypes = {
	id: PropTypes.string,
};
export default Page;
