import React, { useMemo } from 'react';
import {
  MRT_ColumnDef,
  MaterialReactTable,
  useMaterialReactTable,
} from 'material-react-table';
import { useAppSelector } from '../hooks/hooks';
import { selectProduct } from '../reducers/productSlice';
import { Sale, Product } from '../types';

const formatDate = (date: string): string => {
  const dateObject = new Date(date + 'T00:00:00.000Z');
  const formattedDate = dateObject
    .toLocaleString('en-US', {
      month: '2-digit',
      day: '2-digit',
      year: '2-digit',
      timeZone: 'UTC',
    })
    .replaceAll('/', '-');
  return formattedDate;
};

const formatCurrency = (amount: number) => {
  const USD = new Intl.NumberFormat('en-us', {
    style: 'currency',
    currency: 'USD',
  });
  return USD.format(amount);
};

const ProductTable = () => {
  const { product } = useAppSelector(selectProduct);
  const { sales } = product as Product;

  const columns = useMemo<MRT_ColumnDef<Sale>[]>(
    () => [
      {
        accessorFn: (row) => formatDate(row.weekEnding),
        header: 'Week Ending',
      },
      {
        accessorFn: (row) => formatCurrency(row.retailSales),
        header: 'Retail Sales',
      },
      {
        accessorFn: (row) => formatCurrency(row.wholesaleSales),
        header: 'Wholesale Sales',
      },
      {
        accessorKey: 'unitsSold',
        header: 'Units Sold',
      },
      {
        accessorFn: (row) => formatCurrency(row.retailerMargin),
        header: 'Retailer Margin',
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: sales,
    enableColumnActions: false,
    enableColumnFilters: false,
    enableDensityToggle: false,
    enableFullScreenToggle: false,
    enableHiding: false,
  });

  return <MaterialReactTable table={table} />;
};

export default ProductTable;
