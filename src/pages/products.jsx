import React from 'react';
import CategoryList from '../components/listBox';
import { useGetSellers } from '../api/sellers';

const Products = () => {
  return (
    <section>
      <CategoryList />
    </section>
  );
};

export default Products;
