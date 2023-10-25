import React, { useState } from 'react';
import CategoryList from '../components/listBox';
import { useGetProduct } from '../api/products';

const Products = () => {
  const [productId, setProductId] = useState('');

  const { data: product, isFetching } = useGetProduct({}, { productId });

  console.log({ product });
  const handleCategory = (Id) => {
    setProductId(Id);
  };

  return (
    <section>
      <CategoryList handleCategory={handleCategory} />
      {/* {isFetching && <p>Loading Product</p>} */}
    </section>
  );
};

export default Products;
