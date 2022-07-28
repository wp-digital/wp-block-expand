import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';

import {
	BLOCK_CLASS_NAME,
	BUTTON_TEXT_LESS_DEFAULT,
	BUTTON_TEXT_MORE_DEFAULT,
	BUTTON_TYPE_DEFAULT,
	SHRINKED_HEIGHT_DEFAULT,
} from './constants';
import { ALLOWED_BLOCKS } from './constants/editor';

export default function save({ attributes }) {
	const {
		moreText = BUTTON_TEXT_MORE_DEFAULT,
		lessText = BUTTON_TEXT_LESS_DEFAULT,
		buttonType = BUTTON_TYPE_DEFAULT,
		shrinkedHeight = SHRINKED_HEIGHT_DEFAULT,
	} = attributes;

	return (
		<div
			{...useBlockProps.save({
				className: BLOCK_CLASS_NAME,
			})}
		>
			<div
				className={`${BLOCK_CLASS_NAME}__content`}
				style={{ height: `${shrinkedHeight}px` }}
			>
				<InnerBlocks.Content allowedBlocks={ALLOWED_BLOCKS} />
			</div>
			<button
				className={`${BLOCK_CLASS_NAME}__button ${BLOCK_CLASS_NAME}__button_${buttonType}`}
				type="button"
			>
				<span className={`${BLOCK_CLASS_NAME}__more`}>{moreText}</span>
				<span className={`${BLOCK_CLASS_NAME}__less`}>{lessText}</span>
			</button>
		</div>
	);
}
