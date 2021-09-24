import React from 'react';
import { Parallax } from 'react-scroll-parallax';

import { getRandomInt } from '../../_helpers/functions';
import HeroIllustrationCircleMD from './HeroIllustrationCircleMD';
import HeroIllustrationCircleLG from './HeroIllustrationCircleLG';
import HeroIllustrationCircleXL from './HeroIllustrationCircleXL';

const HeroParallax = () => {

	const ref = React.useRef();
	const [num, setNum] = React.useState(getRandomInt(8, 12));

	const arrOfCircles = [HeroIllustrationCircleMD, HeroIllustrationCircleLG, HeroIllustrationCircleLG, HeroIllustrationCircleXL];

	React.useEffect(() => {
		if (ref && ref.current) {
			new ResizeObserver(() => {
				setNum(Math.round(ref.current.offsetHeight / 300));
			}).observe(ref.current);
		}
	}, [ref]);

	return(
		<div className={'absolute w-full h-full'} ref={ref}>
			{ Array.from({ length: num }, (v, i) => {
				const compIndex = getRandomInt(0, arrOfCircles.length - 1);
				const Comp = arrOfCircles[compIndex];
				const offset = getRandomInt(50, 150);
				return (
					<Parallax
						offsetYMin={-offset + '%'}
						offsetYMax={offset + '%'}
						slowerScrollRate={getRandomInt(0, 1)}
						key={i}
					>
						<Comp style={{ left: `${getRandomInt(10, 60)}%` }} />
					</Parallax>
				);
			}) }
		</div>
	);
};

export default HeroParallax;
