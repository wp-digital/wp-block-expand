import { registerBlockType } from '@wordpress/blocks';
import { __, sprintf } from '@wordpress/i18n';

import Edit from './edit';
import save from './save';
import attributes from './attributes';
import icon from './icon';

import './style.scss';

registerBlockType('wpd/block-expand', {
	apiVersion: 2,
	supports: {
		align: true,
		className: false,
	},
	attributes,
	edit: Edit,
	save,
	icon,
	example: {
		attributes: {
			intro: sprintf(
				'<p>%s</p>',
				__('This is an example of the Expand block.', 'wpd-blocks')
			),
			hasFadeout: true,
			fadeoutHeight: 30,
		},
	},
});
