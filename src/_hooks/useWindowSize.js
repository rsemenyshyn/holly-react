import { useState, useEffect } from 'react';
import UAParser from 'ua-parser-js';

import { debounce, deviceType } from '../_helpers/functions';
import { media } from '../_helpers/constants';

export function useWindowSize() {

	const parser = UAParser();

	const [windowSize, setWindowSize] = useState({
		width: typeof window !== 'undefined' ? window.innerWidth : 0,
		height: typeof window !== 'undefined' ? window.innerHeight : 0,
		device: deviceType(),
		parser: UAParser(),
	});

	useEffect(() => {
		function handleResize() {
			let type = typeof window !== 'undefined' && window.innerWidth < media.DEVICE_WIDTH_TABLET_MAX ? media.DEVICE_TABLET : media.DEVICE_DESKTOP;
			type = typeof window !== 'undefined' && window.innerWidth < media.DEVICE_WIDTH_MOBILE_MAX ? media.DEVICE_MOBILE : type;
			let width = typeof window !== 'undefined' ? window.innerWidth : 0;
			if (type !== windowSize.device || width !== windowSize.width) {
				setWindowSize({
					width: width,
					height: typeof window !== 'undefined' ? window.innerHeight : 0,
					device: type,
					parser: parser,
				});
			}
		}
		const debouncedHandleResize = debounce(handleResize, 150);
		if (typeof window !== 'undefined') {
			window.addEventListener('resize', debouncedHandleResize);
		}
		debouncedHandleResize();
		return () => {
			if (typeof window !== 'undefined') {
				window.removeEventListener('resize', debouncedHandleResize);
			}
		};
	});

	const isMobileDevice = windowSize.parser.device.type === media.DEVICE_MOBILE;
	const isTabletDevice = windowSize.parser.device.type === media.DEVICE_TABLET;
	const isDesktopDevice = !isMobileDevice && !isTabletDevice;

	return { ...windowSize, isMobileDevice: isMobileDevice, isTabletDevice: isTabletDevice, isDesktopDevice: isDesktopDevice };
}
