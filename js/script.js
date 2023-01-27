window.addEventListener('DOMContentLoaded', () => {
	const tabs = document.querySelectorAll('.tabheader__item'),
		tabsContent = document.querySelectorAll('.tabcontent'),
		oneTab = document.querySelector('.tabheader__items');

	function hideAllContent() {
		tabsContent.forEach(item => {
			item.style.display = 'none';
		});
		tabs.forEach(item => {
			item.classList.remove('tabheader__item_active');
		});
	}

	function watchContent(i = 0) {
		tabsContent[i].style.display = 'block';
		tabs[i].classList.add('tabheader__item_active');
	}
	hideAllContent();
	watchContent();

	oneTab.addEventListener('click', (event) => {
		let target = event.target;
		if (target && target.classList.contains('tabheader__item')) {
			tabs.forEach((item, i) => {
				if (target == item) {
					hideAllContent();
					watchContent(i);
				}
			});
		}
	});

});