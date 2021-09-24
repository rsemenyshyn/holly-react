import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from './Logo';

function Header({ title = '' }) {
	return (
		<header className="relative py-6">
			<div className="w-full max-w-6xl px-6 mx-auto">
				<div className="relative flex items-center justify-between">
					<h1 className="m-0 text-xl font-bold leading-none uppercase">
						<Link to="/" className="flex items-center no-underline relative pb-5">
							<Logo className="mr-2 absolute left-0 top-0"/>
              <span className="ml-12 mt-2.5">{title}</span>
						</Link>
					</h1>
				</div>
			</div>
		</header>
	);
}
Header.propTypes = {
	title: PropTypes.string,
};
export default Header;
