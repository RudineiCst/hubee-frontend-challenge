import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Product from './Components/product';

const App: React.FC = ()=>  {
  return (
    <>
      <Product/>
      <Product/>
      

      <GlobalStyles/>
    </>
  );
}

export default App;
