import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import Card from '../layout/Card';
import { notionPageToObj } from '../../_helpers/api_mapping';
import { useNotionBlog } from '../../_hooks/useNotionBlog';

const Blog = () => {

	const pages = useNotionBlog();

	return (
		<div className="flex flex-wrap">
			{ pages.map(p => {
				const obj = notionPageToObj(p);
				return (
					<AnimatePresence key={p.id}>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							className={'w-full md:w-1/2 pb-4 pl-2 pr-2'}
						>
							<Card url={obj.url} image={obj.img} title={obj.title} tags={obj.tags} date={obj.date}/>
						</motion.div>
					</AnimatePresence>
				);
			})}
		</div>
	);
};

export default Blog;
