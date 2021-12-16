import React from 'react';
import "../assets/css/SearchBar.css"


export default function SearchBar(props){
  const {handleSearch, value} = props;
  return (
    <div className='search-bar-container'>
      <input className='search-bar' type="text" placeholder='search' onInput={(e)=>handleSearch(e)} value={value} />
    </div>
  );
}