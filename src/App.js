import React from "react"
import Product from "./components/Product"
import data from "./data.json"

class App extends React.Component{

  constructor(){
    super()
    this.state = {
      products: data.products,
      size: "",
      sort: ""
    }
  }
  render(){
    return (
      <div className="grid-container">
        <header>
          <a href="/">Shopping Cart</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Product products={this.state.products}></Product>
            </div>
            <div className="sidebar">Cart Items</div>
          </div>
        </main>
        <footer>
          Footer Content
        </footer>
      </div>
    );
  }
  
}

export default App;
