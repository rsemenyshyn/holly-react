import React from 'react';
import { Switch } from 'react-router-dom';

import Route from './route';
import { routes, routerRoutes } from '../_helpers/constants';

const Routes = () => {
	const homePage = routerRoutes.find(r => r.route === routes.HOME);
	return (
		<Switch>
			{ routerRoutes.map((r, i) => {
				return (
					<Route exact path={r.route} component={r.component} key={i} layout={r.layout} />
				);
			})}

			{ /* redirect user to default page if route does not exist */}
			{ homePage ?
				<Route component={homePage.component} layout={homePage.layout} /> : ''
			}
		</Switch>
	);
};

export default Routes;
