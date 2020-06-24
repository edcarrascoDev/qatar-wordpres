import React, { Component } from 'react';
import { connect } from 'react-redux';
import ProductDescription from './ProductDescription';
import ProductSpecs from './ProductSpecs';
import ProductTabs from './ProductTabs';
import ProductFeatures from './ProductFeatures';
import { changeTab } from '../../actions/productsActions';

class Product extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <section className="tab">
                <ProductTabs onChange={value => this.tabChange(value)} />
                <ProductDescription activeTabClass={this.getTabClassByCurrentTab('description')} />
                <ProductFeatures activeTabClass={this.getTabClassByCurrentTab('features')} />
                <ProductSpecs activeTabClass={this.getTabClassByCurrentTab('specs')} />
            </section>
        );
    }

    getTabClassByCurrentTab(type) {
        const { selected_tab } = this.props;
        return type === selected_tab ? 'tab__container--showed' : 'tab__container--hidden';
    }

    tabChange(value) {
        const { changeTab } = this.props;
        changeTab(value);
    }
}

const mapStateToProps = state => {
    const { selected_tab } = state.products;

    return {
        selected_tab,
    };
};

export default connect(mapStateToProps, { changeTab })(Product);
