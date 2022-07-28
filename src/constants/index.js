import { applyFilters } from '@wordpress/hooks';

export const BLOCK_CLASS_NAME = 'innocode-block-expand';

export const BUTTON_TYPE_BUTTON = 'button';
export const BUTTON_TYPE_LINK = 'link';
export const BUTTON_TYPE_DEFAULT = applyFilters(
	'innocode.block-expand.button.type.default',
	BUTTON_TYPE_LINK
);

export const BUTTON_TEXT_MORE_DEFAULT = applyFilters(
	'innocode.block-expand.button.more-text.default',
	'Show more'
);
export const BUTTON_TEXT_LESS_DEFAULT = applyFilters(
	'innocode.block-expand.button.less-text.default',
	'Show less'
);

export const SHRINKED_HEIGHT_DEFAULT = applyFilters(
	'innocode.block-expand.height.default',
	220
);
