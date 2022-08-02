import {
	useBlockProps,
	InspectorControls,
	RichText,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	RadioControl,
	ToggleControl,
	/* eslint-disable-next-line @wordpress/no-unsafe-wp-apis */
	__experimentalNumberControl as NumberControl,
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

import {
	BLOCK_CLASS_NAME,
	BUTTON_TEXT_LESS_DEFAULT,
	BUTTON_TEXT_MORE_DEFAULT,
	BUTTON_TYPE_BUTTON,
	BUTTON_TYPE_DEFAULT,
	BUTTON_TYPE_LINK,
	FADEOUT_HEIGHT_DEFAULT,
	HAS_FADEOUT_DEFAULT,
} from './constants';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const {
		moreButtonText = BUTTON_TEXT_MORE_DEFAULT,
		lessButtonText = BUTTON_TEXT_LESS_DEFAULT,
		buttonType = BUTTON_TYPE_DEFAULT,
		beforeText,
		afterText,
		hasFadeout = HAS_FADEOUT_DEFAULT,
		fadeoutHeight = FADEOUT_HEIGHT_DEFAULT,
	} = attributes;

	const onChange = (key, value) => {
		setAttributes({ [key]: value });
	};

	const onButtonTypeChange = (value) => onChange('buttonType', value);
	const onMoreButtonTextChange = (value) => onChange('moreButtonText', value);
	const onLessButtonTextChange = (value) => onChange('lessButtonText', value);
	const onHeightChange = (value) => onChange('fadeoutHeight', value);
	const onBeforeTextChange = (value) => onChange('beforeText', value);
	const onAfterTextChange = (value) => onChange('afterText', value);
	const onHasFadeoutChange = (value) => onChange('hasFadeout', value);

	return (
		<div
			{...useBlockProps({
				className: BLOCK_CLASS_NAME,
			})}
		>
			<InspectorControls>
				<PanelBody title={__('Settings', 'innocode-block-expand')}>
					<PanelRow>
						<RadioControl
							label={__('Button type', 'innocode-block-expand')}
							selected={buttonType}
							options={[
								{
									label: __('Link', 'innocode-block-expand'),
									value: BUTTON_TYPE_LINK,
								},
								{
									label: __(
										'Button',
										'innocode-block-expand'
									),
									value: BUTTON_TYPE_BUTTON,
								},
							]}
							onChange={onButtonTypeChange}
						/>
					</PanelRow>
					<PanelRow>
						<ToggleControl
							label={__('Text fadeout', 'innocode-block-expand')}
							checked={hasFadeout}
							onChange={onHasFadeoutChange}
						/>
					</PanelRow>
					{hasFadeout && (
						<PanelRow>
							<NumberControl
								label="Fadeout height"
								value={fadeoutHeight}
								onChange={onHeightChange}
							/>
						</PanelRow>
					)}
				</PanelBody>
			</InspectorControls>

			<RichText
				tagName="div"
				multiline="p"
				value={beforeText}
				placeholder={__('Intro text', 'innocode-block-expand')}
				onChange={onBeforeTextChange}
				className={`${BLOCK_CLASS_NAME}__before-text${
					hasFadeout ? ' faded' : ''
				}`}
				style={{ '--fadeout-height': `${fadeoutHeight}px` }}
			/>
			<RichText
				tagName="button"
				allowedFormats={[]}
				value={moreButtonText}
				onChange={onMoreButtonTextChange}
				className={`${BLOCK_CLASS_NAME}__button ${BLOCK_CLASS_NAME}__button_${buttonType}`}
			/>
			<RichText
				tagName="div"
				multiline="p"
				value={afterText}
				placeholder={__('Additional text', 'innocode-block-expand')}
				onChange={onAfterTextChange}
				className={`${BLOCK_CLASS_NAME}__after-text`}
			/>
			<RichText
				tagName="button"
				allowedFormats={[]}
				value={lessButtonText}
				onChange={onLessButtonTextChange}
				className={`${BLOCK_CLASS_NAME}__button ${BLOCK_CLASS_NAME}__button_${buttonType}`}
			/>
		</div>
	);
}
