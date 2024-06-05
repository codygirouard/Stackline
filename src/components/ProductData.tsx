import React from 'react';
import './App.css';
import ProductTable from './ProductTable';
import ProductChart from './ProductChart';

const ProductData = () => {
  return (
    <div className="product-data">
      <ProductChart />
      <ProductTable />
    </div>
  );
};

export default ProductData;
