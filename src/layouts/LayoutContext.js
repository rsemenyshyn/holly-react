import React from 'react';
import PropTypes from 'prop-types';

const LayoutContext = React.createContext({});
const Consumer = LayoutContext.Consumer;
const Provider = LayoutContext.Provider;

export default LayoutContext;

class LayoutContextProvider extends React.Component {

	constructor(props) {
		super(props);
		this.state = { blog: null };
	}

	updateBlog = (blog, callback) => {
		callback = callback ? callback : () => {};
		this.setState({ blog: blog }, () => callback(blog));
	};

	render() {
		return (
			<Provider value={{ blog: this.state.blog, updateBlog: this.updateBlog }}>
				{ this.props.children ? this.props.children : '' }
			</Provider>
		);
	}

}

LayoutContextProvider.propTypes = {
	children: PropTypes.element,
};

export { LayoutContextProvider, Consumer as LayoutContextConsumer };
