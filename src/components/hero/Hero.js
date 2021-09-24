import React from 'react';
import ScrollReveal from 'scrollreveal';
import PropTypes from 'prop-types';

// import NewsletterForm from '../forms/NewsletterForm';
import Blog from '../notion/Blog';
import { useWindowSize } from '../../_hooks/useWindowSize';

function Hero({ title, content, illustration: Illustration }) {
	const scrollRevealRef = React.useRef([]);

	React.useEffect(() => {
		if (scrollRevealRef.current) {
			scrollRevealRef.current.map((ref, index) =>
				ScrollReveal().reveal(scrollRevealRef.current[index], {
					duration: 1000,
					distance: '40px',
					easing: 'cubic-bezier(0.5, -0.01, 0, 1.005)',
					origin: 'top',
					interval: 150,
				})
			);
		}

		return () => ScrollReveal().destroy();
	}, []);

	const size = useWindowSize();

	return (
		<section className="text-center lg:w-full lg:text-left lg:py-20">
			<div className="w-full max-w-6xl px-6 mx-auto hero">
				<div className="relative hero-inner lg:flex">
					<div
						className="pt-10 pb-16 hero-copy lg:pt-16 lg:pr-20"
						style={{ minWidth: size.isMobileDevice ? '300px' : '600px' }}
					>
						<div className="w-full max-w-3xl mx-auto">
							{ title ?
								<h1
									ref={(el) => (scrollRevealRef.current[0] = el)}
									className="mt-0 mb-4 text-4xl font-bold is-revealing md:text-5xl "
								>
									{title}
								</h1> : ''
							}
							{ content ?
								<p
									ref={(el) => (scrollRevealRef.current[1] = el)}
									className="px-16 prose prose-xl is-revealing md:px-0"
								>
									{content}
								</p> : ''
							}
						</div>

						<div ref={(el) => (scrollRevealRef.current[2] = el)}>
							{ /*
							<NewsletterForm
								className="max-w-md m-0 mt-8 md:flex"
								submit="Get early access"
							/>
              */ }
							<div className={'mt-5'}>
								<Blog />
							</div>
						</div>
					</div>

					{ !size.isMobileDevice ?
						<div className="relative py-10 right-10 md:right-20 lg:right-0 lg:p-0">
							<Illustration />
						</div> : ''
					}
				</div>
			</div>
		</section>
	);
}
Hero.propTypes = {
	title: PropTypes.string,
	content: PropTypes.string,
	illustration: PropTypes.any,
};
export default Hero;
