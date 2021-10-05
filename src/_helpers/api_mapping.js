import { routes } from './constants';
import { infos } from './constants';

export function notionPageToObj(p) {
	const url = routes.PAGE.replace(':id', p.id);
	const imgType = p.cover && p.cover.type ? p.cover.type : '';
 	const img = imgType && p.cover[imgType] && p.cover[imgType].url ? p.cover[imgType].url : '';
	const title = p.properties['Name'].title.length ? p.properties['Name'].title[0].plain_text : '';
	const tags = p.properties.tags ? p.properties.tags.multi_select : [];
	const date = p.properties['Created'] ? p.properties['Created'].created_time : '';
	return { url, img, title, tags, date };
}

export function notionDatabaseToObj(d) {
	const titleFull = d.title.length ? d.title[0].plain_text : '';
	const head = (titleFull.indexOf('[') >= 0 && titleFull.indexOf(']') >= 0) ? titleFull.substring(titleFull.indexOf('[') + 1, titleFull.lastIndexOf(']')) : titleFull;
	const title = titleFull.indexOf('[') >= 0 ? titleFull.substr(0, titleFull.indexOf('[')) : titleFull;
	const description = (titleFull.indexOf('{') >= 0 && titleFull.indexOf('}') >= 0) ? titleFull.substring(titleFull.indexOf('{') + 1, titleFull.lastIndexOf('}')) : infos.heroText;
	const imgType = d.cover && d.cover.type ? d.cover.type : '';
	const img = imgType && d.cover[imgType] && d.cover[imgType].url ? d.cover[imgType].url : '';
	const tags = d.properties && d.properties.tags ? d.properties.tags.multi_select : [];
	const url = d.url;
	return { title, img, tags, url, head, description };
}
