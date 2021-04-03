import React from 'react';
import {Item, CardItem} from './styles';

const Product = ()=> {
    return (
        <Item>
            <CardItem>
            <img src="https://images.pexels.com/photos/21067/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" alt="produto 1"/>
            <p>Lee Pucker design. Leather botinki for handsome designers. Free shipping.</p>
            
            <div>
                <strong> R$ 12,29</strong>
                <button id='btn-minus'>  -  </button>
                <strong>1</strong>
                <button id='btn-plus'>  +  </button>
            </div>

            <p>Eligible for Shipping To Mars or somewhere else</p>
            <button id='btn-buy'>COMPRAR</button>

            </CardItem>

        </Item>
        
    )

}
export default Product;