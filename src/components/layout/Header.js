import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Logo from './Logo';
import { infos } from '../../_helpers/constants';
import { useNotionBlog } from '../../_hooks/useNotionBlog';
import { notionDatabaseToObj } from '../../_helpers/api_mapping';

function Header({ title = '' }) {

	const pages = useNotionBlog();
	const data = pages.info ? notionDatabaseToObj(pages.info) : null;
	title = title ? title : (data ? data.head : infos.header);

	return (
		<header className="relative py-6">
			<div className="w-full max-w-6xl px-6 mx-auto">
				<div className="relative flex items-center justify-between">
					<h1 className="m-0 text-md font-bold leading-none uppercase">
						<Link to="/" className="flex items-center no-underline relative pb-5">
							<Logo className="mr-2 absolute left-0 top-0"/>
							<span className="ml-12 mt-3">{title}</span>
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
