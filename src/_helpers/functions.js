import { media } from './constants';

export function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function pageSize() {
	const width = typeof window !== 'undefined' ? (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) : 0;
	const height = typeof window !== 'undefined' ? (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) : 0;
	return { width: width, height: height };
}

export function deviceType() {
	const size = pageSize();
	const type = size.width < media.DEVICE_WIDTH_DESKTOP ? media.DEVICE_TABLET : media.DEVICE_DESKTOP;
	return size.width < media.DEVICE_WIDTH_MOBILE_MAX ? media.DEVICE_MOBILE : type;
}

export function debounce(fn, ms = 150) {
	let timer;
	return () => {
		clearTimeout(timer);
		timer = setTimeout(() => {
			timer = null;
			fn.apply(this, arguments);
		}, ms);
	};
}
