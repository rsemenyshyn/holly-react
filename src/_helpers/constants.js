import Layout from '../layouts';
//import SupportPage from '../pages/support';
//import ContactPage from '../pages/contact';
//import AboutPage from '../pages/about';
//import FaqsPage from '../pages/faqs';
import IndexPage from '../pages/index';
import Page from '../pages/page';

export const routes = {
	CONTACT: '/contact',
	ABOUT: '/about',
	FAQS: '/faqs',
	SUPPORT: '/support',
	HOME: '/',
	PAGE: '/page/:id',
};

export const infos = {
	header: '',
	footer: `© ${new Date().getFullYear()} Holly, all rights reserved`,
	heroTitle: '',
	heroText: '',
};

export const routerRoutes = [
	/*
	{ route: routes.CONTACT, component: ContactPage, text: 'Contact' },
	{ route: routes.ABOUT, component: AboutPage, text: 'About Us' },
	{ route: routes.FAQS, component: FaqsPage, text: 'FAQ\'s' },
	{ route: routes.SUPPORT, component: SupportPage, text: 'Support' },
	*/
	{ route: routes.HOME, component: IndexPage, layout: Layout },
	{ route: routes.PAGE, component: Page, layout: Layout },
];

export const socialLinks = [
	{
		name: 'Facebook',
		url: 'https://www.facebook.com/rostik.semenyshyn',
		svg: '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M6.023 16L6 9H3V6h3V4c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V6H13l-1 3H9.28v7H6.023z" fill="#FFFFFF" /></svg>',
	},
	{
		name: 'Google',
		url: '',
		svg: `<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path
    d="M7.9 7v2.4H12c-.2 1-1.2 3-4 3-2.4 0-4.3-2-4.3-4.4 0-2.4 2-4.4 4.3-4.4 1.4 0 2.3.6 2.8 1.1l1.9-1.8C11.5 1.7 9.9 1 8 1 4.1 1 1 4.1 1 8s3.1 7 7 7c4 0 6.7-2.8 6.7-6.8 0-.5 0-.8-.1-1.2H7.9z" fill="#FFFFFF" /></svg>`,
	},
	{
		name: 'Twitter',
		url: '',
		svg: '<svg width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M16 3c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4C.7 7.7 1.8 9 3.3 9.3c-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H0c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4C15 4.3 15.6 3.7 16 3z" fill="#FFFFFF" /></svg>',
	},
	{
		name: 'LinkedIn',
		url: 'https://www.linkedin.com/in/rsemenyshyn/',
		svg: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path d="M 12.667969 0 L 3.332031 0 C 1.492188 0 0 1.492188 0 3.332031 L 0 12.667969 C 0 14.507812 1.492188 16 3.332031 16 L 12.667969 16 C 14.507812 16 16 14.507812 16 12.667969 L 16 3.332031 C 16 1.492188 14.507812 0 12.667969 0 Z M 5.332031 12.667969 L 3.332031 12.667969 L 3.332031 5.332031 L 5.332031 5.332031 Z M 4.332031 4.488281 C 3.6875 4.488281 3.167969 3.960938 3.167969 3.3125 C 3.167969 2.664062 3.6875 2.136719 4.332031 2.136719 C 4.976562 2.136719 5.5 2.664062 5.5 3.3125 C 5.5 3.960938 4.976562 4.488281 4.332031 4.488281 Z M 13.332031 12.667969 L 11.332031 12.667969 L 11.332031 8.929688 C 11.332031 6.683594 8.667969 6.855469 8.667969 8.929688 L 8.667969 12.667969 L 6.667969 12.667969 L 6.667969 5.332031 L 8.667969 5.332031 L 8.667969 6.511719 C 9.597656 4.785156 13.332031 4.660156 13.332031 8.160156 Z M 13.332031 12.667969" fill="#FFFFFF"/></svg>',
	},
];

export const media = {
	DEVICE_MOBILE: 'mobile',
	DEVICE_TABLET: 'tablet',
	DEVICE_DESKTOP: 'desktop',
	DEVICE_WIDTH_MOBILE: 520,
	DEVICE_WIDTH_MOBILE_MAX: 640,
	DEVICE_WIDTH_TABLET: 768,
	DEVICE_WIDTH_TABLET_MAX: 1024,
	DEVICE_WIDTH_DESKTOP: 1280,
};
