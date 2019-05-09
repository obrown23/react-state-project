import React, { Component } from 'react'

import ProductList from './ProductList'

class ShopView extends Component {
    render(){
        let list = [
            {productName: "", description: "", price: 10}
        ];

        return(
            <ProductList
            productList={List}
            viewMode = 'SHOP'
            
            addProductFromCart={this.props.addProductFromCart}
           
            />
        )
    }
}

export default ShopView
