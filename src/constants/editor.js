import { applyFilters } from '@wordpress/hooks';

export const ALLOWED_BLOCKS = applyFilters(
	'innocode.block-expand.blocks.allowed',
	['core/heading', 'core/paragraph', 'core/list']
);
