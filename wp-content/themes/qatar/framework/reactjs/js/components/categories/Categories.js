import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchCategories } from '../../actions/categoriesActions';
import CategoriesList from './CategoriesList';

class Categories extends Component {
    componentWillMount() {
        this.props.fetchCategories();
    }

    render() {
        return (
            <section>
                <CategoriesList />
            </section>
        );
    }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, { fetchCategories })(Categories);
