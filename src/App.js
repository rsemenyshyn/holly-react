import React from 'react';

import Routes from './routes/index';
import AppRouter from './routes/AppRouter';
import ErrorBoundary from './components/basic/ErrorBoundary';
import { GlobalHistory } from './components/basic/GlobalHistory';
import { LayoutContextProvider } from './layouts/LayoutContext';

const App = () => {
	return (
		<AppRouter>
			<ErrorBoundary>
				<GlobalHistory />
				<LayoutContextProvider>
					<Routes />
				</LayoutContextProvider>
			</ErrorBoundary>
		</AppRouter>
	);
};
export default App;
