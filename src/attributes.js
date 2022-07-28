import {
	BUTTON_TEXT_LESS_DEFAULT,
	BUTTON_TEXT_MORE_DEFAULT,
	BUTTON_TYPE_BUTTON,
	BUTTON_TYPE_DEFAULT,
	BUTTON_TYPE_LINK,
	SHRINKED_HEIGHT_DEFAULT,
} from './constants';

export default {
	moreText: {
		type: 'string',
		default: BUTTON_TEXT_MORE_DEFAULT,
	},
	lessText: {
		type: 'string',
		default: BUTTON_TEXT_LESS_DEFAULT,
	},
	buttonType: {
		type: 'string',
		default: BUTTON_TYPE_DEFAULT,
		enum: [BUTTON_TYPE_LINK, BUTTON_TYPE_BUTTON],
	},
	shrinkedHeight: {
		type: 'string',
		default: SHRINKED_HEIGHT_DEFAULT,
	},
};
