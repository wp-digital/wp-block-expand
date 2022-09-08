import { BLOCK_CLASS_NAME } from './constants';
import {
	INTRO_ALIGNMENT_DEFAULT,
	BUTTON_TYPE_BUTTON,
	BUTTON_TYPE_LINK,
	BUTTON_TYPE_DEFAULT,
	BUTTON_MORE_TEXT_DEFAULT,
	BUTTON_LESS_TEXT_DEFAULT,
	HAS_FADEOUT_DEFAULT,
	FADEOUT_HEIGHT_DEFAULT,
} from './constants/editor';

export default {
	intro: {
		type: 'string',
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__intro`,
	},
	introAlignment: {
		type: 'string',
		default: INTRO_ALIGNMENT_DEFAULT,
	},
	buttonType: {
		type: 'string',
		default: BUTTON_TYPE_DEFAULT,
		enum: [BUTTON_TYPE_LINK, BUTTON_TYPE_BUTTON],
	},
	buttonMoreText: {
		type: 'string',
		default: BUTTON_MORE_TEXT_DEFAULT,
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__button_more`,
	},
	buttonLessText: {
		type: 'string',
		default: BUTTON_LESS_TEXT_DEFAULT,
		source: 'html',
		selector: `.${BLOCK_CLASS_NAME}__button_less`,
	},
	hasFadeout: {
		type: 'boolean',
		default: HAS_FADEOUT_DEFAULT,
	},
	fadeoutHeight: {
		type: 'number',
		default: FADEOUT_HEIGHT_DEFAULT,
	},
};
