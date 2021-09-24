
export const loadScript = (url, callback, async) => {
	let script = document.createElement('script');
	script.type = 'text/javascript';
	script.async = async;

	if (script.readyState) {
		script.onreadystatechange = function() {
			if (script.readyState === 'loaded' || script.readyState === 'complete') {
				script.onreadystatechange = null;
				if (callback) {
					callback();
				}
			}
		};
	} else {
		script.onload = () => { if (callback) callback(); };
	}

	script.src = url;
	document.getElementsByTagName('head')[0].appendChild(script);
};

export default function Script({ src, callback, async = false }) {
	loadScript(src, callback, async);
	return '';
}
