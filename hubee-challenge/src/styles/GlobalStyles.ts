import {createGlobalStyle} from 'styled-components';


export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}
body {

}
body, input, button {
  font: 16px Roboto, sans-serif;
}
#root {
  margin: auto;
  padding: 40px 20px
}
`