import React from 'react';
import "../assets/css/Product.css"


export default function Product(props){
  const {data} = props;
  
  return (
    <div className='p-container shadow'>
      <div className='p-title'>{data.title}</div>
      <div className='p-price'>{data.price}</div>
    </div>
  );
}