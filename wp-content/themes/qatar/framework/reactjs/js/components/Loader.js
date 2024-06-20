import { connect } from 'react-redux';
import SnackbarInfo from './snackbar/SnackbarInfo';

const Loader = () => {
  return <SnackbarInfo />;
};

const mapStateToProps = (state) => ({});
export default connect(mapStateToProps)(Loader);
