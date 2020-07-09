import React, { Component } from 'react';
import { connect } from 'react-redux';
import SnackbarInfo from './snackbar/SnackbarInfo';

class Loader extends Component {
    render() {
        return <SnackbarInfo />;
    }
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(Loader);
