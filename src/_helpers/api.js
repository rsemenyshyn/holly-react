import axios from 'axios';



const config = {
	headers: {
		Authorization: `Bearer ${NOTION_API_SECRET}`,
		'Notion-Version': '2021-05-13',
	}
};
export const corsProxy = 'https://cors.ripka.workers.dev/?';

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

export function loadBlogArticle(id) {
	return doGet(`${NOTION_API_URL}/pages/${id}`, null, true);
}
