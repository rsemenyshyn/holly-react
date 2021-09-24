import React from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends React.Component {

	state = { error: null };

	render() {
		if (this.state.error) {
			console.error('APP CRASH: ', this.state.error);
			if (typeof window !== 'undefined') {
				window.location.reload();
			}
		}
		return this.props.children;
	}

	static getDerivedStateFromError(error) {
		return { error };
	}

}
ErrorBoundary.propTypes = {
	children: PropTypes.any,
};
export default ErrorBoundary;
