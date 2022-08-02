import { RichText, useBlockProps } from '@wordpress/block-editor';

import {
	BLOCK_CLASS_NAME,
	BUTTON_TEXT_LESS_DEFAULT,
	BUTTON_TEXT_MORE_DEFAULT,
	BUTTON_TYPE_DEFAULT,
	HAS_FADEOUT_DEFAULT,
	FADEOUT_HEIGHT_DEFAULT,
} from './constants';
// import { ALLOWED_BLOCKS } from './constants/editor';

export default function save({ attributes }) {
	const {
		moreButtonText = BUTTON_TEXT_MORE_DEFAULT,
		lessButtonText = BUTTON_TEXT_LESS_DEFAULT,
		buttonType = BUTTON_TYPE_DEFAULT,
		beforeText,
		afterText,
		hasFadeout = HAS_FADEOUT_DEFAULT,
		fadeoutHeight = FADEOUT_HEIGHT_DEFAULT,
	} = attributes;

	return (
		<div
			{...useBlockProps.save({
				className: BLOCK_CLASS_NAME,
			})}
		>
			<div className={`${BLOCK_CLASS_NAME}__content`}>
				<RichText.Content
					tagName="div"
					multiline="p"
					value={beforeText}
					className={`${BLOCK_CLASS_NAME}__before-text${
						hasFadeout ? ' faded' : ''
					}`}
					style={{ '--fadeout-height': `${fadeoutHeight}px` }}
				/>
				<RichText.Content
					tagName="div"
					multiline="p"
					value={afterText}
					className={`${BLOCK_CLASS_NAME}__after-text`}
				/>
			</div>
			<button
				className={`${BLOCK_CLASS_NAME}__button ${BLOCK_CLASS_NAME}__button_${buttonType}`}
				type="button"
			>
				<span className={`${BLOCK_CLASS_NAME}__more`}>
					{moreButtonText}
				</span>
				<span className={`${BLOCK_CLASS_NAME}__less`}>
					{lessButtonText}
				</span>
			</button>
		</div>
	);
}
