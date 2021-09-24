import React from 'react';
import PropTypes from 'prop-types';

const HeroIllustrationCircleSM = ({ className, style }) => {
	return (
		<svg className={ className } style={ style } width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<radialGradient cx="56.15%" cy="27.43%" fx="56.15%" fy="27.43%" r="57.526%" gradientTransform="matrix(.5626 -.82673 .8022 .54591 .026 .589)" id="ball-4-a">
					<stop stopColor="#F8F7FF" offset="0%" />
					<stop stopColor="#DAD8FF" offset="34.827%" />
					<stop stopColor="#9B95F3" offset="100%" />
				</radialGradient>
				<filter x="-500%" y="-500%" width="1000%" height="1000%" filterUnits="objectBoundingBox" id="dropshadow-ball-4">
					<feOffset dx="24" dy="24" in="SourceAlpha" result="shadowOffsetOuter" />
					<feGaussianBlur stdDeviation="24" in="shadowOffsetOuter" result="shadowBlurOuter" />
					<feColorMatrix values="0 0 0 0 0.10 0 0 0 0 0.17 0 0 0 0 0.21 0 0 0 0.22 0" in="shadowBlurOuter" />
				</filter>
			</defs>
			<circle cx="20" cy="20" r="20" fill="#FFF" fillRule="evenodd" filter="url(#dropshadow-ball-4)" />
			<circle cx="20" cy="20" r="20" fill="url(#ball-4-a)" fillRule="evenodd" />
		</svg>
	);
};

HeroIllustrationCircleSM.propTypes = {
	className: PropTypes.string,
	style: PropTypes.object,
};

export default HeroIllustrationCircleSM;