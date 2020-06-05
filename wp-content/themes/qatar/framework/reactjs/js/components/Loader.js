import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCategories } from '../actions/categoriesActions';

class Loader extends Component {
    componentWillMount() {
        const { qatar_categories, qatar_categories_sync, fetchCategories } = this.props;

        if (qatar_categories.length === 0 || Object.keys(qatar_categories_sync).length === 0) {
            fetchCategories();
        }
    }

    render() {
        return <div data-render="" />;
    }
}

const mapStateToProps = state => {
    const { qatar_categories, qatar_categories_sync } = state.categories;
    return {
        qatar_categories,
        qatar_categories_sync,
    };
};

export default connect(
    mapStateToProps,
    { fetchCategories },
)(Loader);
