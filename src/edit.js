import {
	useBlockProps,
	InspectorControls,
	RichText,
	InnerBlocks,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	RadioControl,
	ToggleControl,
	/* eslint-disable-next-line @wordpress/no-unsafe-wp-apis */
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';
import { useSelect } from '@wordpress/data';
import { __ } from '@wordpress/i18n';

import { BLOCK_CLASS_NAME } from './constants';
import {
	BUTTON_TYPE_BUTTON,
	BUTTON_TYPE_LINK,
	BUTTON_TYPE_DEFAULT,
	BUTTON_MORE_TEXT_DEFAULT,
	BUTTON_LESS_TEXT_DEFAULT,
	HAS_FADEOUT_DEFAULT,
	FADEOUT_HEIGHT_DEFAULT,
	ALLOWED_BLOCKS,
} from './constants/editor';

import './editor.scss';

export default function Edit({
	attributes,
	setAttributes,
	clientId,
	isSelected,
}) {
	const {
		intro,
		buttonType = BUTTON_TYPE_DEFAULT,
		buttonMoreText = BUTTON_MORE_TEXT_DEFAULT,
		buttonLessText = BUTTON_LESS_TEXT_DEFAULT,
		hasFadeout = HAS_FADEOUT_DEFAULT,
		fadeoutHeight = FADEOUT_HEIGHT_DEFAULT,
	} = attributes;

	const onChange = (key, value) => {
		setAttributes({ [key]: value });
	};

	const onIntroChange = (value) => onChange('intro', value);
	const onButtonTypeChange = (value) => onChange('buttonType', value);
	const onButtonMoreTextChange = (value) => onChange('buttonMoreText', value);
	const onButtonLessTextChange = (value) => onChange('buttonLessText', value);
	const onHasFadeoutChange = () => onChange('hasFadeout', !hasFadeout);
	const onFadeoutHeightChange = (value) =>
		onChange('fadeoutHeight', parseInt(value, 10));

	const isParentOfSelectedBlock = useSelect(
		(select) =>
			select('core/block-editor').hasSelectedInnerBlock(clientId, true),
		[]
	);
	const isOpened = isSelected || isParentOfSelectedBlock;

	let className = `${BLOCK_CLASS_NAME} ${BLOCK_CLASS_NAME}_is-${
		isOpened ? 'opened' : 'closed'
	}`;

	if (hasFadeout) {
		className += ` ${BLOCK_CLASS_NAME}_has-fadeout`;
	}

	return (
		<div {...useBlockProps({ className })}>
			<InspectorControls>
				<PanelBody title={__('Settings', 'innocode-blocks')}>
					<PanelRow>
						<RadioControl
							label={__('Button type', 'innocode-blocks')}
							selected={buttonType}
							options={[
								{
									label: __('Link', 'innocode-blocks'),
									value: BUTTON_TYPE_LINK,
								},
								{
									label: __('Button', 'innocode-blocks'),
									value: BUTTON_TYPE_BUTTON,
								},
							]}
							onChange={onButtonTypeChange}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Use fadeout effect', 'innocode-blocks')}
							checked={hasFadeout}
							onChange={onHasFadeoutChange}
						/>
					</PanelRow>
					{hasFadeout && (
						<PanelRow>
							<NumberControl
								label={__('Fadeout height', 'innocode-blocks')}
								value={fadeoutHeight}
								onChange={onFadeoutHeightChange}
							/>
						</PanelRow>
					)}
				</PanelBody>
			</InspectorControls>
			<RichText
				tagName="div"
				multiline="p"
				value={intro}
				placeholder={__('Intro', 'innocode-blocks')}
				onChange={onIntroChange}
				className={`${BLOCK_CLASS_NAME}__intro`}
				style={{ '--fadeout-height': `${fadeoutHeight}px` }}
			/>
			<div className={`${BLOCK_CLASS_NAME}__main`}>
				<RichText
					tagName="button"
					allowedFormats={[]}
					value={buttonMoreText}
					onChange={onButtonMoreTextChange}
					className={`${BLOCK_CLASS_NAME}__button ${BLOCK_CLASS_NAME}__button_more ${BLOCK_CLASS_NAME}__button_${buttonType}`}
				/>
				{isOpened && (
					<>
						<div className={`${BLOCK_CLASS_NAME}__content`}>
							<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
						</div>
						<RichText
							tagName="button"
							allowedFormats={[]}
							value={buttonLessText}
							onChange={onButtonLessTextChange}
							className={`${BLOCK_CLASS_NAME}__button ${BLOCK_CLASS_NAME}__button_less ${BLOCK_CLASS_NAME}__button_${buttonType}`}
						/>
					</>
				)}
			</div>
		</div>
	);
}
