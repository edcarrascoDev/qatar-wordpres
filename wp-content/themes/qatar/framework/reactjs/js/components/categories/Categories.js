import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCategories } from '../../actions/categoriesActions';
import CategoriesLis from './CategoriesList';

class Categories extends Component {
    componentWillMount() {
        this.props.fetchCategories();
    }

    render() {
        return (
            <section>
                <CategoriesLis />
            </section>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { fetchCategories })(Categories);
