import { useState } from '@wordpress/element';
import {
	useBlockProps,
	InnerBlocks,
	InspectorControls,
	RichText,
} from '@wordpress/block-editor';
import {
	PanelBody,
	PanelRow,
	RadioControl,
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
	SHRINKED_HEIGHT_DEFAULT,
} from './constants';
import { ALLOWED_BLOCKS } from './constants/editor';

import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const {
		moreText = BUTTON_TEXT_MORE_DEFAULT,
		lessText = BUTTON_TEXT_LESS_DEFAULT,
		buttonType = BUTTON_TYPE_DEFAULT,
		shrinkedHeight = SHRINKED_HEIGHT_DEFAULT,
	} = attributes;

	const onChange = (key, value) => {
		setAttributes({ [key]: value });
	};

	const onButtonTypeChange = (value) => onChange('buttonType', value);
	const onMoreTextChange = (value) => onChange('moreText', value);
	const onLessTextChange = (value) => onChange('lessText', value);
	const onHeightChange = (value) => onChange('shrinkedHeight', value);

	const [isExpanded, setIsExpanded] = useState(true);

	return (
		<div
			{...useBlockProps({
				className: `${BLOCK_CLASS_NAME}${
					isExpanded ? ' expanded' : ''
				}`,
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
						<RadioControl
							label={__('Block state', 'innocode-block-expand')}
							selected={isExpanded}
							options={[
								{
									label: __(
										'Expanded',
										'innocode-block-expand'
									),
									value: true,
								},
								{
									label: __(
										'Shrinked',
										'innocode-block-expand'
									),
									value: false,
								},
							]}
							onChange={() => setIsExpanded(!isExpanded)}
						/>
					</PanelRow>
					{!isExpanded && (
						<PanelRow>
							<NumberControl
								label="Shrinked block height"
								value={shrinkedHeight}
								onChange={onHeightChange}
							/>
						</PanelRow>
					)}
				</PanelBody>
			</InspectorControls>

			<div
				className={`${BLOCK_CLASS_NAME}__content`}
				style={{ height: `${shrinkedHeight}px` }}
			>
				<InnerBlocks allowedBlocks={ALLOWED_BLOCKS} />
			</div>
			<RichText
				tagName="button"
				allowedFormats={[]}
				value={isExpanded ? lessText : moreText}
				onChange={isExpanded ? onLessTextChange : onMoreTextChange}
				className={`${BLOCK_CLASS_NAME}__button ${BLOCK_CLASS_NAME}__button_${buttonType}`}
			/>
		</div>
	);
}
