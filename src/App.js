//branch feature1
import React from "react";
import "./index.css";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
class App extends React.Component {
  constructor() {
    super(),
    this.state = {
      products:data.products,
      cartItems: [],
      size:"",
      sort:""
    }
  }

  addToCart = (product)=> {
    // console.log(12);
    const cartItems = this.state.cartItems.slice();
    let alreadyCart = false;
    cartItems.forEach((item) => {
      console.log(item);
      if(item._id === product._id) {
        item.count++;
        alreadyCart = true;
      }
    });
    if(!alreadyCart) {
      cartItems.push({...product, count:1 });   
      this.setState({cartItems});
    }

  }

  removeFormCart= (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({cartItems:cartItems.filter((x) => x._id !==product._id),
    });
  }

  filterProducts = (event) => {
    console.log(event.target.value);
    if(event.target.value === "") {
      this.setState({size: event.target.value,product: data.products})
    }else{
      this.setState ({
        size:event.target.value,
        products:data.products.filter(product => product.availableSizes.indexOf(event.target.value)>=0)
      })
    }
  }
  sortProducts = (event) => {
    const sort = event.target.value;
    console.log(event.target.value);
    this.setState((state) => ({
      sort : sort,
      products : this.state.products
      .slice()
      .sort((a, b) => 
        sort === "lowest" 
        ? a.price > b.price 
          ? 1 
          : -1 
        :sort === "highest" 
        ? a.price < b.price 
          ? 1 
          : -1

        :a._id < b._id
          ? 1 
          : -1
      ),
    }));
  }
  render() {
    // console.log(event.target.value);
    return (
      <div className="grid-container">
        <header>
          <a href="">Shopping Cart</a>
        </header>
  
        <main>
          <div className="content">
            <div className="main">
              <Filter 
                count={this.state.products.length} 
                sort={this.state.sort}
                size={this.state.size}
                filterProducts={this.filterProducts}
                sortProducts={this.sortProducts}></Filter>
              <Products 
                products={this.state.products}
                addToCart={this.addToCart}>
              </Products>
            </div>
            <div className="sidebar">
              <Cart 
              cartItems={this.state.cartItems} 
              removeFormCart={this.removeFormCart}
              />
            </div>
          </div>
        </main>
        <footer>
          All right is reserve
        </footer>
      </div>
    )
  }
}
export default App;
