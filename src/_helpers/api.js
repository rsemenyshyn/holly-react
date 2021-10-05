import axios from 'axios';

const NOTION_API_URL = 'https://api.notion.com/v1';
const NOTION_API_URL_WORKER = process.env.REACT_APP_NOTION_WORKER;
const NOTION_API_SECRET = process.env.REACT_APP_NOTION_SERCET;
const NOTION_API_DB = process.env.REACT_APP_NOTION_DB;

const config = {
	headers: {
		Authorization: `Bearer ${NOTION_API_SECRET}`,
		'Notion-Version': '2021-05-13',
	}
};
export const corsProxy = `${process.env.REACT_APP_NOTION_CORS}`;

// private functions
function doPost(url, data, conf, useProxy) {
	conf = conf ? conf : config;
	url = parseInt(process.env.REACT_APP_USE_PROXY) || useProxy ? `${corsProxy}${url}` : url;
	return new Promise((resolve) => {
		axios.post(url, data, conf).then((result) => {
			resolve(result.data);
		}).catch((error) => {
			console.log(error);
			resolve(null);
		});
	});
}
function doGet(url, conf, useProxy) {
	conf = conf ? conf : config;
	url = parseInt(process.env.REACT_APP_USE_PROXY) || useProxy ? `${corsProxy}${url}` : url;
	return new Promise((resolve) => {
		axios.get(url, conf).then((result) => {
			resolve(result.data);
		}).catch((error) => {
			console.log(error);
			resolve(null);
		});
	});
}

export function loadBlogPages() {
	return doPost(`${NOTION_API_URL}/databases/${NOTION_API_DB}/query`, null, null, true);
}

export function loadBlogInfo() {
	return doGet(`${NOTION_API_URL}/databases/${NOTION_API_DB}`, null, true);
}

export function loadBlogArticleToRender(id) {
	return doGet(`${NOTION_API_URL_WORKER}/page/${id}`, {});
}
