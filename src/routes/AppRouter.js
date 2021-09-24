import React from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter, StaticRouter } from 'react-router-dom';

const AppRouter = ({ children }) => {
	return typeof window !== 'undefined' ? (
		<BrowserRouter>
			{ children }
		</BrowserRouter>
	) : (
		<StaticRouter>
			{ children }
		</StaticRouter>
	);
};
AppRouter.propTypes = {
	children: PropTypes.any,
};
export default AppRouter;
