// Injecteer styles.css in YouTube
fetch(chrome.runtime.getURL('styles.css'))
	.then(response => response.text())
	.then(css => {
		const style = document.createElement('style');
		style.textContent = css;
		document.head.appendChild(style);
	});
// Content script voor YouTube Blush Theme
// Je kunt hier extra JS toevoegen als je dynamisch wilt stylen
