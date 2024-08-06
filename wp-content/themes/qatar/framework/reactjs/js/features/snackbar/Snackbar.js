import { Snackbar as SnackbarUi, IconButton, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { openSnackbar } from './snackbarSlice';

export const Snackbar = () => {
  const { open, hideDuration, message, anchorOrigin, linkUrl, linkText } = useSelector((state) => ({
    open: state.snackbar.open,
    hideDuration: state.snackbar.hideDuration,
    message: state.snackbar.message,
    anchorOrigin: state.snackbar.anchorOrigin,
    linkUrl: state.snackbar.linkUrl,
    linkText: state.snackbar.linkText,
  }));
  const dispatch = useDispatch();

  return (
    <SnackbarUi
      anchorOrigin={anchorOrigin}
      open={open}
      autoHideDuration={hideDuration}
      onClose={() => dispatch(openSnackbar(false))}
      message={message}
      action={
        <>
          {!!linkUrl ? (
            <Button variant="contained" href={linkUrl}>
              {linkText}
            </Button>
          ) : null}
          <IconButton onClick={() => dispatch(openSnackbar(false))}>
            <i className="icon icon--close-outline icon--invert" />
          </IconButton>
        </>
      }
    />
  );
};
