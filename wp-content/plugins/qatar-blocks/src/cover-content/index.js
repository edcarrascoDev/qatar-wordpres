import BaseBlock from '../base-block';

const { __ } = wp.i18n;
import { registerBlockType } from '@wordpress/blocks';
import {
  InspectorControls,
  PlainText,
  RichText,
  __experimentalLinkControl as LinkControl,
} from '@wordpress/block-editor';
import { PanelRow, PanelBody, SelectControl } from '@wordpress/components';

import { UTILS } from '../utils';
import { ContainerBlock } from '../container-block';

class CoverContent extends BaseBlock {
  title = __('Contenedor con Imagen');
  parent = ['qatar/cover-container'];
  attributes = {
    headline: {
      default: 'h2',
    },
    title: {},
    content: {},
    linkText: {
      default: 'Conocer más',
    },
    urlObject: {},
    buttonClasses: {},
  };

  edit = ({ attributes, setAttributes, className }) => {
    return (
      <ContainerBlock title={this.title}>
        <div className={className}>
          <div className={UTILS.FORM_GROUP}>
            <label htmlFor="title" className={'label'}>
              Título
            </label>
            <PlainText
              value={attributes.title}
              id={'title'}
              onChange={content => setAttributes({ title: content })}
              placeholder={__('Título')}
            />
          </div>
          <div className={UTILS.FORM_GROUP}>
            <label htmlFor="content" className={'label'}>
              Descripción
            </label>
            <RichText
              id={'content'}
              multine={'br'}
              value={attributes.content}
              tagName={'span'}
              onChange={content => setAttributes({ content: content })}
              placeholder={__('Descripción')}
            />
          </div>
          <div className="row mt-2">
            <div className="col-md-6">
              <div className={UTILS.FORM_GROUP}>
                <label htmlFor="linkText" className={'label'}>
                  Texto en el botón
                </label>
                <PlainText
                  value={attributes.linkText}
                  id={'linkText'}
                  onChange={content => setAttributes({ linkText: content })}
                  placeholder={__('ej: conocer más')}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className={UTILS.FORM_GROUP}>
                <label htmlFor="linkUrl" className={'label'}>
                  link del botón
                </label>
                <LinkControl
                  value={attributes.urlObject}
                  onChange={content => setAttributes({ urlObject: content })}
                />
              </div>
            </div>
          </div>
        </div>
        {this.renderInspector({ attributes, setAttributes })}
      </ContainerBlock>
    );
  };

  renderInspector = ({ attributes, setAttributes }) => (
    <InspectorControls>
      <PanelBody title={'Otros Ajustes'}>
        <PanelRow>
          <div className={UTILS.FORM_GROUP}>
            <label htmlFor="headline">Seleccionar tipo de encabezado (título)</label>
            <SelectControl
              id={'headline'}
              value={attributes.headline}
              options={[
                { label: 'headline 1', value: 'h1' },
                { label: 'headline 2', value: 'h2' },
                { label: 'headline 3', value: 'h3' },
                { label: 'headline 4', value: 'h4' },
                { label: 'headline 5', value: 'h5' },
                { label: 'headline 6', value: 'h6' },
              ]}
              onChange={value => {
                setAttributes({ headline: value });
              }}
            />
          </div>
        </PanelRow>

        <PanelRow>
          <div className={UTILS.FORM_GROUP}>
            <label htmlFor="buttonClasses">Classes para el Botón</label>
            <PlainText
              value={attributes.buttonClasses}
              id={'buttonClasses'}
              onChange={content => setAttributes({ buttonClasses: content })}
              placeholder={__('ej: mdc-button--secondary')}
            />
          </div>
        </PanelRow>
      </PanelBody>
    </InspectorControls>
  );

  save = params => {
    const { attributes } = params;
    const { headline, buttonClasses } = attributes;

    return (
      <div className={'cover__box'}>
        <RichText.Content
          className={`headline headline--${headline}`}
          tagName={headline}
          value={attributes.title}
        />
        <RichText.Content tagName={'p'} value={attributes.content} />

        <a href={attributes.urlObject?.url} className={`mdc-button ${buttonClasses}`}>
          {attributes.linkText}
        </a>
      </div>
    );
  };
}

registerBlockType('qatar/cover-content', new CoverContent());
