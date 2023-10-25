import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from './'

export const _getProducts = async (payload) => {
  const response = await axios.get('product/get-all-products');
  return response;
};

export const useGetProducts = (options = {}) => {


  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    setEnabled(true);
  }, []);

  return useQuery(
    "all products", _getProducts,
    {
      enabled,
      select: (data) => data?.data?.products,
      ...options,
    }
  );
};