import React from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';

import Routes from './routes/index';
import AppRouter from './routes/AppRouter';
import ErrorBoundary from './components/basic/ErrorBoundary';
import { GlobalHistory } from './components/basic/GlobalHistory';
import { LayoutContextProvider } from './layouts/LayoutContext';

const App = () => {
	return (
		<ParallaxProvider>
			<AppRouter>
				<ErrorBoundary>
					<GlobalHistory />
					<LayoutContextProvider>
						<Routes />
					</LayoutContextProvider>
				</ErrorBoundary>
			</AppRouter>
		</ParallaxProvider>
	);
};
export default App;
