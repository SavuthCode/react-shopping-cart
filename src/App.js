//branch feature1
import React from "react";
import "./index.css";
import data from "./data.json";
import Products from "./components/Products";
class App extends React.Component {
  constructor() {
    super(),
    this.state = {
      products:data.products,
      size:"",
      sort:""
    }
  }
  render() {
    // console.log(this.state.products);
    return (
      <div className="grid-container">
        <header>
          <a href="">Shopping Cart</a>
        </header>
  
        <main>
          <div className="content">
            <div className="main">
              <Products products={this.state.products}></Products>
            </div>
            <div className="sidebar">All Cart Items</div>
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
