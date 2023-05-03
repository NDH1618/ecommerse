import React from 'react'
import Banner from '../../common/component/Banner/banner.js'
import ProductList from './components/ProductList/productlist.js'

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div style={{margin: '70px 0px'}}>
                <Banner />
                <div>
                    <ProductList />
                </div>

            </div>
        );
    }
}
export default ProductPage;