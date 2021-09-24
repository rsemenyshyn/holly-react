import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { setPrevURL } from '../../_helpers/store';

const LinkWithStore = ({ children, to, className }) => {
	return (
		<Link to={ to } className={ className } onClick={() => {
			if (window) {
				window.scrollTo(0, 0);
				setPrevURL(window.location.pathname);
			}
		}}>
			{ children }
		</Link>
	);
};
LinkWithStore.propTypes = {
	children: PropTypes.any.isRequired,
	to: PropTypes.string.isRequired,
	className: PropTypes.string,
};
export default LinkWithStore;
