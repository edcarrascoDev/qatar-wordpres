import BaseBlock from '../base-block';
import { registerBlockType } from '@wordpress/blocks';
import { ImagePreview, UTILS } from '../utils';
import { MediaPlaceholder } from '@wordpress/block-editor';
import { ContainerBlock } from '../container-block';

class GallerySliderItem extends BaseBlock {
  title = 'Imagen';
  parent = ['qatar-inc/gallery-slider'];

  attributes = {
    imageUrl: {},
    imageAlt: {},
    imageId: {},
  };

  selectImage = ({ setAttributes, media }) => {
    const { sizes } = media;
    setAttributes({
      imageId: media.id,
      imageUrl: sizes['gallery-slider-image'].url,
      imageAlt: media.alt,
    });
  };

  edit = ({ attributes, setAttributes }) => {
    return (
      <ContainerBlock>
        <div className={UTILS.FORM_GROUP}>
          <span>Imagen</span>
          <MediaPlaceholder
            onSelect={media => this.selectImage({ setAttributes, media })}
            allowedTypes={['image']}
            multiple={false}
            mediaPreview={<ImagePreview url={attributes.imageUrl} />}
            labels={{ title: '', instructions: '' }}
          />
        </div>
      </ContainerBlock>
    );
  };

  save = ({ attributes }) => (
    <div className="swiper-slide">
      <div className="gallery-slider__item">
        <img src={attributes.imageUrl} alt={attributes.imageAlt} />
      </div>
    </div>
  );
}

registerBlockType('qatar-inc/gallery-slider-item', new GallerySliderItem());
