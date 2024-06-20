export const UTILS = {
  MAIN_CONTAINER: 'main-container',
  CONTAINER: 'container',
  WRAPPER: 'wrapper',
  FORM_GROUP: 'form-group',
  TITLE: 'block-title',
  ROW: 'row',
  INTERNAL_ROW: 'row-internal',
  COL: 'col',
};

export const ImagePreview = props => {
  return (
    <div className="image-preview">
      <img src={props.url} alt="" />
    </div>
  );
};
