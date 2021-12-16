import React, { Component } from 'react';
import Product from './Product';
import "../assets/css/AllProducts.css";


export default class AllProducts extends Component{
  state = {
    search: "",
    count: 1,
    products: {
      "6834": {
        "subcategory": "mobile",
        "title": "Micromax Canvas Spark",
        "price": "4999",
        "popularity": "51936"
      },
      "5530": {
          "subcategory": "mobile",
          "title": "Samsung Galaxy Grand Max",
          "price": "12950",
          "popularity": "48876"
      },
      "4340": {
          "subcategory": "mobile",
          "title": "Apple iPhone 6",
          "price": "40999",
          "popularity": "46198"
      },
      "4804": {
          "subcategory": "mobile",
          "title": "Samsung Galaxy Grand Prime",
          "price": "9286",
          "popularity": "45775"
      },
      "5266": {
          "subcategory": "mobile",
          "title": "Micromax Canvas Nitro A311",
          "price": "7769",
          "popularity": "44273"
      },
      "5629": {
          "subcategory": "mobile",
          "title": "Samsung Galaxy E7",
          "price": "15763",
          "popularity": "40345"
      },
      "4376": {
          "subcategory": "mobile",
          "title": "Samsung Galaxy Core 2",
          "price": "5907",
          "popularity": "36082"
      },
      "6766": {
          "subcategory": "mobile",
          "title": "Lenovo A6000 Plus",
          "price": "7499",
          "popularity": "32727"
      }
    }
  }

  handleSearch=(e)=>{
    
  }

  render(){
    const {products, search} = this.state;
    const sorted = Object.values(products).sort((a,b)=> parseInt(b.popularity) - parseInt(a.popularity));
    return (
    <div>
      <div>
        <input type="text" placeholder='search' onInput={(e)=>this.handleSearch(e)} value={search} />
      </div>
      <div className='all-products'>
        {sorted.map(product => <Product key={Math.random()} data={product} /> )}
      </div>
    </div>);
  }
}