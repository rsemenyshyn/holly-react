import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Card = ({ title, url, image, tags, date }) => {

	return (
		<NavLink
			to={url}
			className={'w-full block shadow relative rounded-2xl bg-center bg-no-repeat bg-cover'}
			style={{ backgroundImage: `url(${ image })`, paddingBottom: '70%' }}
		>
			<h2 className={'absolute bottom-0 mb-5 text-white p-5 bg-primary-400 bg-opacity-50'}>{ title }</h2>
		</NavLink>
	);
};

Card.propTypes = {
	title: PropTypes.string.isRequired,
	url: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	tags: PropTypes.array,
	date: PropTypes.string,
};

export default Card;
