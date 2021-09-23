import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { routerRoutes, routes } from '../../_helpers/constants';

export default function NavLinks({ className }) {
	return (
		<ul className={className}>
			{ routerRoutes.map(r => {
				const isHome = routes.HOME === r.route;
				const isArticle = routes.PAGE === r.route;
				return isHome || isArticle ? '' : (
					<li key={r.text} className="ml-4">
						<NavLink to={r.route} activeClassName="is-active" className="text-white">
							{r.text}
						</NavLink>
					</li>
				);
			}) }
		</ul>
	);
}
NavLinks.propTypes = {
	className: PropTypes.string,
};
