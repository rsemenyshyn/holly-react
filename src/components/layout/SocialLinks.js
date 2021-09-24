import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

import { socialLinks } from '../../_helpers/constants';

function SocialLinkItem({ link }) {
	const { name, url, svg } = link;
	return (
		<li className="ml-4">
			<a href={url} target="_blank" rel="noreferrer">
				<span className="sr-only">{name}</span>
				<div dangerouslySetInnerHTML={{ __html: svg }} />
			</a>
		</li>
	);
}
SocialLinkItem.propTypes = {
	link: PropTypes.object.isRequired,
};

export default function SocialLinks({ className }) {
	return (
		<ul className={classnames('list-reset', className)}>
			{ socialLinks.map(link => {
				return link.url ? (
					<SocialLinkItem key={link.name} link={link} />
				) : '';
			}) }
		</ul>
	);
}

SocialLinks.propTypes = {
	className: PropTypes.string,
};
