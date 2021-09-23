import React from 'react';
import PropTypes from 'prop-types';

import Layout from '../layouts/index';
import { Article, ArticleContent, ArticleMedia } from '../components/layout/Article';
import { default as BlogPage } from '../components/notion/Page';

const Page = (props) => {

	const { id } = props.match.params;
	const [data, setData] = React.useState(null);

	return (
		<Layout>
			<Article>
				<ArticleContent title={data && data.title ? data.title : ''}>
					<BlogPage id={id} onLoad={obj => setData(obj)}/>
				</ArticleContent>

				<ArticleMedia>
					{ data && data.img ?
						<img src={data.img} alt={data.title} /> : ''
					}
				</ArticleMedia>
			</Article>
		</Layout>
	);
};

Page.propTypes = {
	match: PropTypes.object.isRequired,
};

export default Page;
