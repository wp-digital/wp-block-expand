import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

export const INTRO_ALIGNMENT_DEFAULT = applyFilters(
	'innocode.block-expand.intro_alignment.default',
	'none'
);

export const BUTTON_TYPE_BUTTON = 'button';
export const BUTTON_TYPE_LINK = 'link';
export const BUTTON_TYPE_DEFAULT = applyFilters(
	'innocode.block-expand.button.type.default',
	BUTTON_TYPE_LINK
);

export const BUTTON_MORE_TEXT_DEFAULT = applyFilters(
	'innocode.block-expand.button_more.text.default',
	__('Show more', 'innocode-blocks')
);
export const BUTTON_LESS_TEXT_DEFAULT = applyFilters(
	'innocode.block-expand.button_less.text.default',
	__('Show less', 'innocode-blocks')
);

export const HAS_FADEOUT_DEFAULT = applyFilters(
	'innocode.block-expand.has_fadeout.default',
	false
);
export const FADEOUT_HEIGHT_DEFAULT = applyFilters(
	'innocode.block-expand.fadeout.height.default',
	60
);

export const ALLOWED_BLOCKS = applyFilters(
	'innocode.block-expand.allowed_blocks',
	['core/heading', 'core/paragraph', 'core/list']
);
