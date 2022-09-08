import domReady from '@wordpress/dom-ready';

import { BLOCK_CLASS_NAME } from './constants';

const onButtonClick = (event) => {
	const block = event.currentTarget.closest(`.${BLOCK_CLASS_NAME}`);

	if (block) {
		block.classList.toggle(`${BLOCK_CLASS_NAME}_is-opened`);
		block.classList.toggle(`${BLOCK_CLASS_NAME}_is-closed`);
	}
};

const handler = (button) => {
	button.addEventListener('click', onButtonClick);
};

const onReady = () => {
	[].map.call(
		document.querySelectorAll(`.${BLOCK_CLASS_NAME}__button`),
		handler
	);
};

domReady(onReady);
