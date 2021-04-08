import styled from 'styled-components';

export const ShoppingCart = styled.div`
display:flex;
flex-wrap:wrap;
max-height: 60%;
height:60%;
`;
export const Container = styled.div`
border: 1px solid rgba(0, 0, 0, 0.4);
box-sizing: border-box;
border-radius: 4px;
font-family: 'Roboto', sans-serif;
/* width:700px; */
height: 950px;

 .title{
   margin-top:35px;
   display:flex;
   align-items:center;
   justify-content:center;
 }
`;

export const ContainerCupon = styled.div`
display:flex;
align-items:center;
/* flex:1; */
justify-content:space-between;
max-width: 580px;
margin: 25px;

.buttonAddCupon{
    background: #1580AE;
    border-radius: 4px;
    border:none;
    padding: 17px;
    color: #FFF;
    width:30%;
  }
`;

export const InputCupon = styled.div`
    border: 2px solid rgba(0, 0, 0, 0.12);;
    box-sizing: border-box;
    border-radius: 5px;
    width: 70%;
    margin-right: 10px;

  input{
    padding:15px;
    border:none;
    color: #1580AE
  }


`;

export const Request = styled.div`
display: flex;
margin-top: 43px;
justify-content:space-between;
font-family: 'Roboto', sans-serif;
font-size: 24px;
width:100%;
padding: 0px 25px;

  & + div{
    margin-top: 23px;
  }

`;
export const Produto = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 24px;
    width: 40%;

`;
export const ContainerButtons = styled.div`
  display:flex;
  width:20%;
  justify-content:space-between;

`;

export const ContainerPrice = styled.div`
  display:flex;
  justify-content:right;
  width: 25%;
`;
