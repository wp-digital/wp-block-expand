import { BLOCK_CLASS_NAME } from './constants';

export default function Help({ children, position }) {
	return (
		<div className={`${BLOCK_CLASS_NAME}__help`}>
			<span
				className={`${BLOCK_CLASS_NAME}__help-text ${BLOCK_CLASS_NAME}__help-text_${
					position === 'bottom' ? position : 'top'
				}`}
			>
				{children}
			</span>
		</div>
	);
}
