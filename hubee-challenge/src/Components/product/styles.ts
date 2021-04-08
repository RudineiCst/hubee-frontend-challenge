import styled from 'styled-components';

export const CardItem = styled.div`
    margin: 8px 5px;
    width: 275px;
    max-width: 275px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    box-sizing: border-box;
    border-radius: 4px;
    padding: 16px;

    img{
            height: 224px;
            width: 100%;
            border-radius: 4px;

        }

    img + p {
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            line-height: 150%;
            /* or 24px */
            letter-spacing: 0.0275em;
            color: #19191D;
            margin-top: 12px;
        }


        #btn-buy{
            background: #1580AE;
            border-radius: 4px;
            color: #FFF;
            border: 0;
            height: 32px;
            width:100%;
            margin-top: 20px;
        }


`;

export const ContainerPrice = styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;

    .Price{
      width:55%;
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
      margin-bottom: 10px;
      strong{
        font-family: 'Roboto', sans-serif;
        font-size: 24px;
        font-weight: bold;
        margin-bottom:8px;


       }
    }

    .containerBtn{
      display:flex;
      justify-content:space-around;
      align-items:center;
      width:45%;
      //estilização de botões
      #btn-minus{
          /* White 100% */
          background: #FFFFFF;
          /* Red / 30 */
          border: 1px solid #FAA9A3;
          box-sizing: border-box;
          border-radius: 50%;
          width: 32px;
          height: 32px;

          font-family: 'Roboto', sans-serif;
          font-weight: bold;
        }
        #btn-plus {
          background: #FFFFFF;
          /* Green / 30 */
          border: 1px solid #A9D3AB;
          box-sizing: border-box;
          border-radius: 50%;
          width: 32px;
          height: 32px;

          font-family: 'Roboto', sans-serif;
          font-weight: bold;
      }
    }

& + p {
    color: #787885;
    font-size: 14px;
}

`;
