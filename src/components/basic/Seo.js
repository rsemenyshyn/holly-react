import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

const Seo = ({ title, description, image }) => {

	image = image ? image : '';
	const url = window ? window.location.href : '';

	return (
		<Helmet>
			{/* General tags */}
			<title>{title}</title>
			<meta name="description" content={description} />
			{/* OpenGraph tags */}
			<meta name="og:url" content={url} />
			<meta name="og:title" content={title} />
			<meta name="og:description" content={description} />
			<meta name="og:image" content={image} />
			<meta name="og:type" content="website" />
			{ /*
			<meta name="fb:app_id" content={facebook.appId} />
			*/ }
			{/* Twitter Card tags */}
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />
			<meta name="twitter:card" content="summary" />
			{ /*}
			<meta
				name="twitter:creator"
				content={config.authorTwitterAccount ? config.authorTwitterAccount : ""}
			/>
			*/ }
		</Helmet>
	);
};
Seo.propTypes = {
	title: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	image: PropTypes.string,
};
export default Seo;
