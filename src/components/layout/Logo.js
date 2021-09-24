import React from 'react';
import PropTypes from 'prop-types';

import HeroIllustrationCircleSM from '../hero/HeroIllustrationCircleSM';

export default function Logo({ className, style }) {
	return (
		<HeroIllustrationCircleSM style={ style} className={ className } />
	);
}

Logo.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
};
