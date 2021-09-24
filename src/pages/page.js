import React from 'react';
import PropTypes from 'prop-types';
import { motion, AnimatePresence } from 'framer-motion';

import { Article, ArticleContent, ArticleMedia } from '../components/layout/Article';
import { default as BlogPage } from '../components/notion/Page';
import { useNotionBlog } from '../_hooks/useNotionBlog';
import { notionPageToObj } from '../_helpers/api_mapping';

const Page = (props) => {

	const { id } = props.match.params;
	const pages = useNotionBlog();
	const page = pages && Array.isArray(pages) && pages.length ? pages.find(p => p.id === id) : null;
	const data = page ? notionPageToObj(page) : null;

	return (
		<Article>
			<ArticleContent title={data && data.title ? data.title : ''}>
				<BlogPage id={id} />
			</ArticleContent>

			<ArticleMedia>
				{ data && data.img ?
          <AnimatePresence>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
					    <img src={data.img} alt={data.title} className={'shadow-2xl rounded-l-xl z-10'} />
            </motion.div>
          </AnimatePresence> : ''
				}
			</ArticleMedia>
		</Article>
	);
};

Page.propTypes = {
	match: PropTypes.object.isRequired,
};

export default Page;
