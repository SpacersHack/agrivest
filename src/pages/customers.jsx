import React from 'react';

import SellerTable from '../components/sellers/table/';
import { COLUMNS } from '../components/sellers/table/column';
import { useGetSellers } from '../api/sellers';

const Customers = () => {
  const { data: sellers, isLoading: loading } = useGetSellers();
  console.log(sellers);
  if (loading) return <p>loading</p>;
  return (
    <div>
      {sellers?.success && (
        <SellerTable COLUMNS={COLUMNS} tableData={sellers?.sellers} />
      )}
    </div>
  );
};

export default Customers;
