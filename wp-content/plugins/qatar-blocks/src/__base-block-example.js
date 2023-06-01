import BaseBlock from "./base-block";
import { registerBlockType } from "@wordpress/blocks";
import { InspectorControls, PlainText } from "@wordpress/block-editor";
import { BaseControl, PanelBody, ToggleControl } from "@wordpress/components";
import { UTILS } from "./utils";
import { ContainerBlock } from "./container-block";

class Example extends BaseBlock {
  title = "Example";

  parent = ["ccg/section"];

  attributes = {
    title: {},
    subtitle: {},
    content: {},
    imageUrl: {},
    imageAlt: {},
    linkText: {},
    urlObject: {},
    onLoad: { default: false },
    version: { default: "1.0.0" },
  };

  renderInspector = ({ attributes, setAttributes }) => (
    <InspectorControls>
      <PanelBody title={"Other Options"}>
        <BaseControl>
          <div className={UTILS.FORM_GROUP}>
            <ToggleControl
              label="Style load delay"
              checked={attributes.onLoad}
              onChange={(value) => setAttributes({ onLoad: value })}
            />
          </div>
          <div className={UTILS.FORM_GROUP}>
            <span>Style Version</span>
            <PlainText
              value={attributes.version}
              onChange={(version) => setAttributes({ version })}
            />
          </div>
        </BaseControl>
      </PanelBody>
    </InspectorControls>
  );

  edit = ({ attributes, setAttributes }) => (
    <ContainerBlock title={this.title}>
      {this.renderInspector({ attributes, setAttributes })}
    </ContainerBlock>
  );

  save = ({ attributes }) => {
    const { themeUri } = blockVars;
    return (
      <>
        <link
          rel="stylesheet"
          href={`${themeUri}/frontend/dist/example.css?ver=${attributes.version}`}
          media="all"
          onLoad={attributes.onLoad ? "this.media='all'" : null}
        />
      </>
    );
  };
}

registerBlockType("ccg/example", new Example());
