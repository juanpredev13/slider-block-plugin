/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

export default function save({ attributes }) {
    const { images = [], animationDuration = 5, imagesToShow = 1 } = attributes;
    const blockProps = useBlockProps.save({
        className: 'wp-block-create-block-image-slider',
    });

    return (
        <div {...blockProps}>
            <div className="wp-block-create-block-image-slider__container">
                {/* Main slider component */}
                <div 
                    className="wp-block-create-block-image-slider__slider" 
                    data-animation-duration={animationDuration}
                    data-images-to-show={imagesToShow}
                >
                    {/* Slides wrapper */}
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
            </div>
        </div>
    );
}