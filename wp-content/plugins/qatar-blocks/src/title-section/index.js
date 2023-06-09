import BaseBlock from '../base-block';

import { __ } from '@wordpress/i18n';
import { registerBlockType } from '@wordpress/blocks';
import { InspectorControls, PlainText, RichText } from '@wordpress/block-editor';
import {
  PanelRow,
  PanelBody,
  SelectControl,
  RadioControl,
  FormToggle,
} from '@wordpress/components';
import { ContainerBlock } from '../container-block';
import { UTILS } from '../utils';

class TitleSection extends BaseBlock {
  title = __('Encabezado');
  parent = ['qatar/single-container', 'qatar/columns', 'core/column'];
  attributes = {
    headline: {
      default: 'h2',
    },
    title: {},
    content: {},
    separatorClasses: {
      default: 'separator--secondary',
    },
    isLightText: {
      default: false,
    },
    textAligned: {
      default: 'center',
    },
  };
  edit = ({ attributes, setAttributes, className }) => (
    <ContainerBlock title={this.title}>
      <div className={className}>
        <div className={UTILS.FORM_GROUP}>
          <label htmlFor="title" className={'label'}>
            Título
          </label>
          <RichText
            value={attributes.title}
            multine={'br'}
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
      </div>
      {this.renderInspector({ attributes, setAttributes })}
    </ContainerBlock>
  );

  renderInspector = ({ attributes, setAttributes }) => (
    <InspectorControls>
      <PanelBody title={'Ajuste de textos'}>
        <PanelRow>
          <div className="toggle">
            <FormToggle
              id={'isLightText'}
              value={attributes.isLightText}
              checked={attributes.isLightText}
              onChange={() => setAttributes({ isLightText: !attributes.isLightText })}
            />
            <label htmlFor={'isLightText'}>Usar textos claros</label>
          </div>
        </PanelRow>

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
          <RadioControl
            label="Aliniamiento del texto"
            selected={attributes.textAligned}
            options={[
              { label: 'Centro', value: 'center' },
              { label: 'Izquiera', value: 'left' },
              { label: 'Derecha', value: 'right' },
            ]}
            onChange={option => {
              setAttributes({ textAligned: option });
            }}
          />
        </PanelRow>
      </PanelBody>
      <PanelBody title={'Otros Ajustes'}>
        <div className={UTILS.FORM_GROUP}>
          <label htmlFor="separatorClasses" className={'label'}>
            Classes para el separador
          </label>
          <PlainText
            value={attributes.separatorClasses}
            id={'separatorClasses'}
            onChange={content => setAttributes({ separatorClasses: content })}
            placeholder={__('ej: separator--secondary')}
          />
        </div>
      </PanelBody>
    </InspectorControls>
  );

  save = ({ attributes }) => {
    const { headline, isLightText, textAligned, separatorClasses } = attributes;

    const classes = {
      title: `headline headline--${headline} ${
        isLightText ? 'headline--light ' : ''
      } text-${textAligned}`,
      subtitle: `text-${textAligned} ${isLightText ? 'text-light' : ''}`,
      separator: `separator separator--${textAligned} ${separatorClasses}`,
    };

    return (
      <>
        <RichText.Content className={classes.title} tagName={headline} value={attributes.title} />
        <div className={classes.separator} />
        {!!attributes.content ? (
          <RichText.Content className={classes.subtitle} tagName={'p'} value={attributes.content} />
        ) : null}
      </>
    );
  };
}

registerBlockType('qatar/title-section', new TitleSection());
