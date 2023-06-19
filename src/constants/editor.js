import { applyFilters } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';

export const INTRO_ALIGNMENT_DEFAULT = applyFilters(
	'wpd.block-expand.intro_alignment.default',
	'none'
);

export const BUTTON_TYPE_BUTTON = 'button';
export const BUTTON_TYPE_LINK = 'link';
export const BUTTON_TYPE_DEFAULT = applyFilters(
	'wpd.block-expand.button.type.default',
	BUTTON_TYPE_LINK
);

export const BUTTON_MORE_TEXT_DEFAULT = applyFilters(
	'wpd.block-expand.button_more.text.default',
	__('Show more', 'wpd-blocks')
);
export const BUTTON_LESS_TEXT_DEFAULT = applyFilters(
	'wpd.block-expand.button_less.text.default',
	__('Show less', 'wpd-blocks')
);

export const HAS_FADEOUT_DEFAULT = applyFilters(
	'wpd.block-expand.has_fadeout.default',
	false
);
export const FADEOUT_HEIGHT_DEFAULT = applyFilters(
	'wpd.block-expand.fadeout.height.default',
	60
);

export const ALLOWED_BLOCKS = applyFilters('wpd.block-expand.allowed_blocks', [
	'core/heading',
	'core/paragraph',
	'core/list',
]);
