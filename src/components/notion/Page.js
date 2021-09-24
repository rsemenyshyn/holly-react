import React from 'react';
import PropTypes from 'prop-types';
import { NotionRenderer } from 'react-notion';
import { motion, AnimatePresence } from 'framer-motion';

import '../../assets/extra/notion.css';
import { loadBlogArticleToRender } from '../../_helpers/api';

const Page = ({ id }) => {

	const [page, setPage] = React.useState(null);

	React.useEffect(() => {
		if (page === null) {
			loadBlogArticleToRender(id).then(p => setPage(p ? p : undefined));
		}
	}, [id, page]);

	return page ? (
		<AnimatePresence>
			<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
		    <NotionRenderer blockMap={page} />
			</motion.div>
		</AnimatePresence>
	) : '';
};
Page.propTypes = {
	id: PropTypes.string,
};
export default Page;
