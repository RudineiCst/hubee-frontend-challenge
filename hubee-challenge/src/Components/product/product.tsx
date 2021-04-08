import React, { useState } from 'react';
import { CardItem, ContainerPrice } from './styles';

interface Props {
    img: string;
    description: string;
    price: number;
    name: string;
}

const Product:React.FC<Props> = ({
  img, description, price, name,
}) => {
  const [incrementItem, setIncrementItem] = useState(0);

  function handleRemovedItemCart() {
    if (incrementItem > 0) {
      setIncrementItem(incrementItem - 1);
    }
  }
  function handleAddItemCart() {
    setIncrementItem(incrementItem + 1);
  }
  return (
    <CardItem>
      <img src={img} alt={name} />
      <p>{name}</p>

      <ContainerPrice>
        <div className="Price">
          <strong>
            R$
            {price}
          </strong>
        </div>
        <div className="containerBtn">
          <button id="btn-minus" onClick={handleRemovedItemCart}>  -  </button>
          <strong>{incrementItem}</strong>
          <button id="btn-plus" onClick={handleAddItemCart}>  +  </button>
        </div>
      </ContainerPrice>

      <p>{description}</p>
      <button id="btn-buy">COMPRAR</button>

    </CardItem>

  );
};

export default Product;
