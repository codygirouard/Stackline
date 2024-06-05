import React, { useEffect } from 'react';
import './App.css';
import { useAppSelector } from '../hooks/hooks';
import { selectProduct, setProduct } from '../reducers/productSlice';
import { useDispatch } from 'react-redux';
import { fetchProduct } from '../lib/productApi';
import ProductDetails from './ProductDetails';
import ProductData from './ProductData';

const Content = () => {
  const { product } = useAppSelector(selectProduct);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!product) {
      fetchProduct().then(({ data }) => dispatch(setProduct(data)));
    }
  });

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <section className="content">
      <div className="left">
        <ProductDetails />
      </div>
      <div className="right">
        <ProductData />
      </div>
    </section>
  );
};

export default Content;
