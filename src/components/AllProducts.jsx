import React, { Component } from 'react';
import Product from './Product';
import "../assets/css/AllProducts.css";
import SearchBar from './SearchBar';
import Pagination from './Pagination';
import paginate from "../util/paginate";

export default class AllProducts extends Component{
  state = {
    search: "",
    pageNo: 1,
    pageSize: 30,
    count: 0,
    products: {}
  }

  async componentDidMount(){
    const raw = await fetch("https://s3.amazonaws.com/open-to-cors/assignment.json");
    const data = await raw.json();

    this.setState({...data});
  }

  handleSearch=(e)=>{
    const inp = e.currentTarget;

    this.setState({search: inp.value, pageNo: 1});
  }

  onPageSelect=(e)=>{
    const pageNo = parseInt(e.target.innerText);

    this.setState({pageNo});
  }

  render(){
    const {products: allProducts, count, pageNo, pageSize, search} = this.state;

    if(!count) return <div className='super-center'>Fetching data...</div>;

    const sorted = Object.values(allProducts).sort((a,b)=> parseInt(b.popularity) - parseInt(a.popularity));
    const filtered = sorted.filter(product=>product.title.toLowerCase().includes(search));
    const products = paginate(filtered, pageNo, pageSize);

    return (
    <div>
      <SearchBar handleSearch={this.handleSearch} value={search} />
      <div className='all-products'>
        {products.map(product => <Product key={Math.random()} data={product} /> )}
      </div>
      <Pagination pageSize={pageSize} pageNo={pageNo} noOfItems={filtered.length || 0} onPageSelect={this.onPageSelect} />
    </div>);
  }
}