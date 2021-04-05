import React, { useEffect, useState } from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Product from './Components/product';

import api from  './server/api';

interface ProductInterface {
  id: number;
  name:string;
  price: number;
  url: string;
}

const App: React.FC = ()=>  {
  const [productItem, setProductItem] = useState<ProductInterface[]>([]);

  async function loadProducts (){
    const response = await api.get('products');

    const responseProducts = response.data;

    setProductItem([...productItem, responseProducts]);
    console.log(responseProducts);
  }
  useEffect(()=> {
   loadProducts();
  },[]);

  return (
    <>

      <Product/>
      <Product/>
      

      <GlobalStyles/>
    </>
  );
}

export default App;
