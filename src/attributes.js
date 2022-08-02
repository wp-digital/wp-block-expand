import {
	BUTTON_TEXT_LESS_DEFAULT,
	BUTTON_TEXT_MORE_DEFAULT,
	BUTTON_TYPE_BUTTON,
	BUTTON_TYPE_DEFAULT,
	BUTTON_TYPE_LINK,
	FADEOUT_HEIGHT_DEFAULT,
	HAS_FADEOUT_DEFAULT,
} from './constants';

export default {
	moreButtonText: {
		type: 'string',
		default: BUTTON_TEXT_MORE_DEFAULT,
	},
	lessButtonText: {
		type: 'string',
		default: BUTTON_TEXT_LESS_DEFAULT,
	},
	beforeText: {
		type: 'string',
	},
	afterText: {
		type: 'string',
	},
	buttonType: {
		type: 'string',
		default: BUTTON_TYPE_DEFAULT,
		enum: [BUTTON_TYPE_LINK, BUTTON_TYPE_BUTTON],
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
