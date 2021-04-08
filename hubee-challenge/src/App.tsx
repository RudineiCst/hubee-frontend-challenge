import React, { useEffect, useState } from 'react';

import GlobalStyles from './styles/GlobalStyles';
import { Layout, ContainerProduct } from './styles/Layout';

import { ButtonMinus, ButtonPlus } from './Components/button/styles';
import Product from './Components/product/product';
import {
  ShoppingCart,
  Container,
  ContainerCupon,
  InputCupon,
  Request,
  ContainerButtons,
  ContainerPrice,
  Produto,
} from './styles/styles';

import api from './server/api';

interface ProductInterface {
  description: string;
  id: number;
  name:string;
  price: number;
  url: string;
}

const App: React.FC = () => {
  const [productItem, setProductItem] = useState<ProductInterface[]>([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products');

      const responseProducts = response.data;

      setProductItem(responseProducts);
      // console.log(responseProducts);
    }
    loadProducts();
  },
  []);

  return (
    <Layout>
      <ContainerProduct>
        {productItem.map((product) => (

          <Product
            key={product.id}
            description={product.description}
            name={product.name}
            img={product.url}
            price={product.price}
          />
        ))}
      </ContainerProduct>

      <Container>
        <div className="title">
          <strong>Resumo do pedido</strong>
        </div>
        <ShoppingCart>
          <Request>
            <Produto>
              <p>teste</p>
            </Produto>

            <ContainerButtons>
              <ButtonMinus> - </ButtonMinus>
              0
              <ButtonPlus> + </ButtonPlus>
            </ContainerButtons>

            <ContainerPrice>
              <strong> R$ 10,00</strong>
            </ContainerPrice>

          </Request>
        </ShoppingCart>

        <ContainerCupon>
          <InputCupon>
            <input type="text" placeholder="Insira o cupon" />
          </InputCupon>
          <button className="buttonAddCupon">Adicionar</button>
        </ContainerCupon>
      </Container>

      {/* <ProductOverview /> */}
      <GlobalStyles />
    </Layout>
  );
};

export default App;
