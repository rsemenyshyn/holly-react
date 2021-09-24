import { routes } from './constants';

export function notionPageToObj(p) {
	const url = routes.PAGE.replace(':id', p.id);
	const img = p.cover && p.cover.external && p.cover.external.url ? p.cover.external.url : '';
	const title = p.properties['Name'].title.length ? p.properties['Name'].title[0].plain_text : '';
	const tags = p.properties.tags ? p.properties.tags.multi_select : [];
	const date = p.properties['Created'] ? p.properties['Created'].created_time : '';
	return { url, img, title, tags, date };
}
