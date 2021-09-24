import React from 'react';
import PropTypes from 'prop-types';

const HeroIllustrationCircleLG = ({ className, style }) => {
	return (
		<svg width="2000" height="2000" viewBox="0 0 2000 2000" xmlns="http://www.w3.org/2000/svg" className={ className } style={ style }>
			<defs>
				<radialGradient cx="56.15%" cy="27.43%" fx="56.15%" fy="27.43%" r="57.526%" gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)" id="ball-2-a">
					<stop stopColor="#F8F7FF" offset="0%" />
					<stop stopColor="#DAD8FF" offset="34.827%" />
					<stop stopColor="#9B95F3" offset="100%" />
				</radialGradient>
				<filter x="-500%" y="-500%" width="1000%" height="1000%" filterUnits="objectBoundingBox" id="dropshadow-ball-2">
					<feOffset dx="24" dy="24" in="SourceAlpha" result="shadowOffsetOuter" />
					<feGaussianBlur stdDeviation="24" in="shadowOffsetOuter" result="shadowBlurOuter" />
					<feColorMatrix values="0 0 0 0 0.10 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.22 0" in="shadowBlurOuter" />
				</filter>
			</defs>
			<circle cx="100" cy="100" r="100" fill="#FFF" fillRule="evenodd" filter="url(#dropshadow-ball-2)" />
			<circle cx="100" cy="100" r="100" fill="url(#ball-2-a)" fillRule="evenodd" />
		</svg>
	);
};

HeroIllustrationCircleLG.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
};

export default HeroIllustrationCircleLG;
