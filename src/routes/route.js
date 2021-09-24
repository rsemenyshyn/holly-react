import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export default function RouteWrapper({ component: Component, layout: Layout, isPrivate, ...rest }) {
	const signed = false;

	/**
     * Redirect user to SignIn page if he tries to access a private route
     * without authentication.
     */
	if (isPrivate && !signed) {
		return <Redirect to='/' />;
	}

	/**
     * If not included on both previous cases, redirect user to the desired route.
     */
	return (
		<Route { ...rest } render={ props => (
			<Layout { ...rest }>
				<Component { ...props } />
			</Layout>
		)} />
	);
}
RouteWrapper.propTypes = {
	isPrivate: PropTypes.bool,
	layout: PropTypes.oneOfType([ PropTypes.element, PropTypes.func, PropTypes.object ]).isRequired,
	component: PropTypes.oneOfType([ PropTypes.element, PropTypes.func, PropTypes.object ]).isRequired
};
RouteWrapper.defaultProps = { isPrivate: false };
