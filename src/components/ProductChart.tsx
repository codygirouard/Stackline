import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
import './App.css';
import { selectProduct } from '../reducers/productSlice';
import { Product } from 'types';
import { useAppSelector } from '../hooks/hooks';

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const ProductChart = () => {
  const { product } = useAppSelector(selectProduct);
  const { sales } = product as Product;

  const options = {
    theme: 'light2',
    title: {
      text: 'Retail Sales',
      dockInsidePlotArea: true,
      horizontalAlign: 'left',
      fontSize: 16,
      fontWeight: 'lighter',
      fontColor: '#495363',
      padding: 8,
    },
    axisY2: {
      lineThickness: 0,
      gridThickness: 0,
      labelFontSize: 0.1,
      labelFontColor: '#ffffff',
      tickLength: 0,
      viewportMaximum: 1500000,
      viewportMinimum: -500000,
    },
    axisX: {
      valueFormatString: 'MMM',
      lineThickness: 1,
      gridThickness: 0,
      tickLength: 0,
      intervalType: 'month',
      interval: 1,
      labelFontColor: '#BCBFC9',
      lineColor: '#BCBFC9',
    },
    data: [
      {
        type: 'spline',
        markerType: 'none',
        axisYType: 'secondary',
        lineColor: '#34A2F6',
        lineThickness: 3,
        color: '#34A2F6',
        xValueFormatString: 'MMM DD YYYY',
        yValueFormatString: '$#,###',
        dataPoints: sales.map(({ weekEnding, retailSales }) => ({
          x: new Date(weekEnding),
          y: retailSales,
        })),
      },
      {
        type: 'spline',
        markerType: 'none',
        axisYType: 'secondary',
        lineColor: '#919DB8',
        lineThickness: 3,
        color: '#919DB8',
        xValueFormatString: 'MMM DD YYYY',
        yValueFormatString: '$#,###',
        dataPoints: sales.map(({ weekEnding, wholesaleSales }) => ({
          x: new Date(weekEnding),
          y: wholesaleSales,
        })),
      },
    ],
  };

  return <CanvasJSChart options={options} />;
};

export default ProductChart;
