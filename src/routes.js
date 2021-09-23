import React, { Component } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';

import { routes, routerRoutes } from './_helpers/constants';

class App extends Component {
	render() {
		return (
			<Router basename={process.env.PUBLIC_URL}>
				<Switch>
					{ routerRoutes.map((r, i) => {
						return (
							<Route exact path={r.route} component={r.component} key={i}/>
						);
					})}
					<Redirect from="*" to={routes.HOME} />
				</Switch>
			</Router>
		);
	}
}

export default App;
