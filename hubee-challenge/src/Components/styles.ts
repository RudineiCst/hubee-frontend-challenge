import styled from 'styled-components';

export const Item = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.4);
    box-sizing: border-box;
    border-radius: 4px;

    width: 288px;
    height: 469px;
`

export const CardItem = styled.div`
    margin: 8px 18px;

    img{
            height: 224px;
            width: 226px;
            border-radius: 4px;
            margin: 8px 16px auto 
        }

    img + p {
            font-family: 'Roboto', sans-serif;
            font-size: 16px;
            line-height: 150%;
            /* or 24px */
            letter-spacing: 0.0275em;
            color: #19191D;
            margin:auto 16px;
        }

        div{
            display:flex;
            align-items: center;
            justify-content:space-between;
            margin: 8px 16px;

            strong{
                font-family: 'Roboto', sans-serif;
                font-size: 24px;
                font-weight: bold;
            }
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

        div + p {
            color: #787885;
            font-size: 14px;
            margin: 8px 16px;
        }
        #btn-buy{
            background: #1580AE;
            border-radius: 4px;
            color: #FFF;
            border: 0; 
            margin: auto 16px 12px;
            width:226px;
            height: 32px;
        }


`
