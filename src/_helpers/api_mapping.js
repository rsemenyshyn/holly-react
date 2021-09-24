import { routes } from './constants';

export function notionPageToObj(p) {
	const url = routes.PAGE.replace(':id', p.id);
	const imgType = p.cover && p.cover.type ? p.cover.type : '';
 	const img = imgType && p.cover['imgType'] && p.cover['imgType'].url ? p.cover['imgType'].url : '';
	const title = p.properties['Name'].title.length ? p.properties['Name'].title[0].plain_text : '';
	const tags = p.properties.tags ? p.properties.tags.multi_select : [];
	const date = p.properties['Created'] ? p.properties['Created'].created_time : '';
	return { url, img, title, tags, date };
}
