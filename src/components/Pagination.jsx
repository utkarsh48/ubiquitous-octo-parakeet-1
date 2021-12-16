import React from 'react';
import "../assets/css/Pagination.css"

export default function Paginate(props){
  const {pageSize, pageNo, noOfItems, onPageSelect} = props;
  const noOfPages = Math.ceil(noOfItems / pageSize);
  console.log(noOfPages);

  let pages = [];
  for(let i = 1; i<=noOfPages; i++){
    pages.push(<div key={i} onClick={(e)=>onPageSelect(e)} className={`shadow page-no ${pageNo === i ? "page-active" : ""}`}>{i}</div>);
  }

  return (<div className='all-pages'>{pages}</div>);
}