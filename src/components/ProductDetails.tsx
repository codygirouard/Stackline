import React from 'react';
import './App.css';
import { selectProduct } from '../reducers/productSlice';
import { Product } from 'types';
import { useAppSelector } from '../hooks/hooks';

const ProductDetails = () => {
  const { product } = useAppSelector(selectProduct);
  const { image, title, subtitle, tags } = product as Product;

  return (
    <div className="product-details">
      <div className="product">
        <img src={image} alt={title} className="product-img" />
        <h5 className="product-title">{title}</h5>
        <p className="product-subtitle">{subtitle}</p>
      </div>
      <hr />
      <div className="tags">
        {tags.map((tag: string) => {
          return (
            <div key={tag} className="tag">
              <p>{tag}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ProductDetails;
