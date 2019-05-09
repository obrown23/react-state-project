import React, {Component} from 'react'
import ShopView from './ShopView.js'
import AdminView from './AdminView.js'
/* Import ShopView component here */
/* Import CartView component here */

class HomePage extends Component {
  //add class instance state member
// constructor() {
//   super();

//   this.state ={
//     productList: [],
//     nameOfItemOnSale: "hello world"
//   };
// }

state = {
  productList: [],
  nameOfItemOnSale: "Bobs your Uncle"
  cartList: [],
};

  toggleEditSaleItem = () => {
    //toggle state's showEditSaleItem boolean
  };

  handleItemCurrentlyOnSaleChange = (event) => {
    const itemCurrentlyOnSale = event.target.value
    //update state's saleItem

    //set the new state of our nameOfItemOnSale data
    this.setState(
      {nameOfItemOnSale: itemCurrentlyOnSale
      }
    );
  };

  addNewProductToProductList = (newProduct) => {
    //get state's product list

    //add product to product list
    //productList.push(newProduct)

    //update state's product list
  };

  deleteProductFromListByIndex = (productToDelete) => {
    //get state's product list

    //remove product from list
    //productList.splice(productToDelete, 1)

    //update state's product list
  };
  addProductToCart = (product) => {
    const cartList = [...this.state.cartList];

    cartList.push(product);
    
    this.setState({ cartList })
  }

  render () {
    const adminView = <AdminView
      productList={[]}
      addNewProductToProductList={this.addNewProductToProductList}
      deleteProductFromListByIndex={this.deleteProductFromListByIndex}
      />
        const ShopView = <ShopView
          productList={this.state.productList}
          addNewProductToCart={this.addProductToCart}
       
          />
    
    return (
      <div>
        <div>
          <div id="home-page-nav">
            <h1>Hardware Store</h1>
            <span>Currently On Sale: {/* state's item currently on sale*/ this.state.nameOfItemOnSale }!</span>

            <div>
              {
                 <div>
                  <input
                    onChange={this.handleItemCurrentlyOnSaleChange}
                    type="text"
                  />
                </div>
              }
            </div>
            <div>
              <button onClick={this.toggleEditSaleItem}>
                  'Edit Sale Item'
              </button>
            </div>
            <div>
              <button onClick={this.toggleAdminView}>
                  'Show Admin View'
              </button>
            </div>
          </div>
        </div>

        <div id="view-container">
          { adminView }
        </div>
      </div>
    )
  }
}

export default HomePage
