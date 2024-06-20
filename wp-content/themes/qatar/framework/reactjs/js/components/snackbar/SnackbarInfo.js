import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { openSnackbar, resetSnackbarState } from '../../actions/snackbarActions';

const closeSnackbar = (openSnackbar) => {
  openSnackbar(false);
};
const SnackbarInfo = ({
  open,
  hideDuration,
  message,
  anchorOrigin,
  linkUrl,
  linkText,
  openSnackbar,
}) => {
  return (
    <Fragment>
      <Snackbar
        anchorOrigin={anchorOrigin}
        open={open}
        autoHideDuration={hideDuration}
        onClose={() => closeSnackbar(openSnackbar)}
        message={message}
        action={
          <Fragment>
            {!!linkUrl ? (
              <Button variant="contained" href={linkUrl}>
                {linkText}
              </Button>
            ) : null}
            <IconButton onClick={() => closeSnackbar(openSnackbar)}>
              <i className="icon icon--close-outline icon--invert" />
            </IconButton>
          </Fragment>
        }
      />
    </Fragment>
  );
};

const mapStateToProps = (state) => {
  const { open, hideDuration, message, anchorOrigin, linkUrl, linkText } = state.snackbar;

  return {
    open,
    hideDuration,
    message,
    anchorOrigin,
    linkUrl,
    linkText,
  };
};
export default connect(mapStateToProps, { openSnackbar, resetSnackbarState })(SnackbarInfo);
