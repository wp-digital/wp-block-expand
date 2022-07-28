import domReady from '@wordpress/dom-ready';

import { BLOCK_CLASS_NAME } from './constants';

const BUTTON_CLASS_NAME = `${BLOCK_CLASS_NAME}__button`;

const onButtonClick = (event) => {
	const block = event.currentTarget.closest(`.${BLOCK_CLASS_NAME}`);

	if (block) {
		block.classList.toggle('expanded');
	}
};

const onReady = () => {
	document.querySelectorAll(`.${BUTTON_CLASS_NAME}`).forEach((button) => {
		button.addEventListener('click', onButtonClick);
	});
};

domReady(onReady);
