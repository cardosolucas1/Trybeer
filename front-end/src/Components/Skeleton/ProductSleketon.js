import React from 'react';
import Skeleton from 'react-loading-skeleton';

const ProductSleketon = () => {
  return (
    <div className="product">
      <div className="product-values">
        <Skeleton height={30} width={70}/>
        <Skeleton height={30} width={70}/>
        <Skeleton height={30} width={70}/>
      </div>
      <Skeleton height={200}/>
      <Skeleton height={50}/>
      <div className="product-values">
        <Skeleton height={50} width={70}/>
        <Skeleton height={50} width={70}/>
        <Skeleton height={50} width={70}/>
      </div>
    </div>
  );
}

export default ProductSleketon;