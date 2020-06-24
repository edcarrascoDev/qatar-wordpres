import React, { Component } from 'react';
import { connect } from 'react-redux';

class Loader extends Component {
    render() {
        return <div data-render="" />;
    }
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps)(Loader);
