/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
*/
import { useBlockProps, MediaUpload, MediaUploadCheck, InspectorControls } from '@wordpress/block-editor';
import { Button, PanelBody, RangeControl } from '@wordpress/components';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
*/

import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */

export default function Edit({ attributes, setAttributes }) {
    const { images = [], animationDuration = 5, imagesToShow = 1 } = attributes;
    const blockProps = useBlockProps({
        className: 'wp-block-create-block-image-slider',
    });

    return (
        <>
            {/* Block controls in the sidebar */}
            <InspectorControls>
                <PanelBody title="Slider Settings">
                    <RangeControl
                        label="Animation duration (seconds)"
                        value={animationDuration}
                        onChange={(value) => setAttributes({ animationDuration: value })}
                        min={1}
                        max={10}
                    />
                    <RangeControl
                        label="Images to show"
                        value={imagesToShow}
                        onChange={(value) => setAttributes({ imagesToShow: value })}
                        min={1}
                        max={Math.max(1, images.length)}
                    />
                </PanelBody>
            </InspectorControls>
            <div {...blockProps}>
                <MediaUploadCheck>
                    <MediaUpload
                        onSelect={(selectedImages) => {
                            setAttributes({
                                images: selectedImages.map(img => ({
                                    url: img.url,
                                    id: img.id,
                                    alt: img.alt || ''
                                }))
                            });
                        }}
                        allowedTypes={['image']}
                        multiple={true}
                        value={images.map(img => img.id)}
                        render={({ open }) => (
                            <div className="wp-block-create-block-image-slider__container">
                                {images.length > 0 ? (
                                    // Render slider if images are selected
                                    <div 
                                        className="wp-block-create-block-image-slider__slider" 
                                        style={{
                                            '--animation-duration': `${animationDuration}s`,
                                            '--images-to-show': imagesToShow
                                        }}
                                    >
                                        <div className="wp-block-create-block-image-slider__wrapper">
                                            {images.map((img, index) => (
                                                <div key={img.id || index} className="wp-block-create-block-image-slider__slide">
                                                    <img src={img.url} alt={img.alt || `Slide ${index + 1}`} />
                                                </div>
                                            ))}
                                        </div>
                                        {/* Navigation controls */}
                                        <div className="wp-block-create-block-image-slider__controls">
                                            <button className="wp-block-create-block-image-slider__controls-button wp-block-create-block-image-slider__controls-button--prev" aria-label="Previous slide">❮</button>
                                            <button className="wp-block-create-block-image-slider__controls-button wp-block-create-block-image-slider__controls-button--next" aria-label="Next slide">❯</button>
                                        </div>
                                        {/* Pagination dots */}
                                        <div className="wp-block-create-block-image-slider__pagination">
                                            {images.map((_, index) => (
                                                <button
                                                    key={index}
                                                    className="wp-block-create-block-image-slider__pagination-dot"
                                                    aria-label={`Go to slide ${index + 1}`}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    // Render placeholder if no images are selected
                                    <Button
                                        onClick={open}
                                        className="wp-block-create-block-image-slider__placeholder"
                                        variant="primary"
                                    >
                                        Select Images
                                    </Button>
                                )}
                            </div>
                        )}
                    />
                </MediaUploadCheck>
            </div>
        </>
    );
}