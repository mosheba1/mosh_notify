$(document).ready(() => {
	iziToast.settings({
		position: 'topRight',
		theme: 'dark',
		transitionIn: 'flipInX',
		transitionOut: 'flipOutX',
		//iconUrl: 'https://i.imgur.com/OyEFPXv.png',
		targetFirst: true,
		buttons: [
			['<button>NOTIFICATION</button>', function (instance, toast) {
				alert("Hello world!");
			}, true], // true to focus
		],
		close: false
	});

	window.addEventListener('message', (event) => {
		var data = event.data;

		if(data.action == "notify") {
			if (iziToast[data.type]) {
				iziToast[data.type]({
					title: data.title,
					message: data.description,
					theme: data.theme,
					timeout: data.duration,
					iconUrl: data.iconUrl
				
				});

				if(event.callback) event.callback()
			}
		} else if(data.action == "modal") {
		} else if(data.action == "MoshDrop") {
			iziToast.destroy();
			if(event.callback) event.callback()
		}
	});
});