let button = $('#hamburger_menu');
let menu = $('#menu');
let enalbed = true;

button.on('click', () => {
	if (enalbed) {
		menu.animate({ top: '15px' }, 1000);
		enalbed = false;
	} else {
		menu.animate({ top: '-100%' }, 1000);
		enalbed = true;
	}
});
