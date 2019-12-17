import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
/* Fonts */
/* sans-serif */
@import url("https://fonts.googleapis.com/css?family=Roboto:400,700");
/* Cursive */
@import url("https://fonts.googleapis.com/css?family=Lobster");
/* serif */
@import url("https://fonts.googleapis.com/css?family=Aleo:400,700");

/**** Resets ****/
html {
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: inherit;
}

/*** Global ****/

img {
  max-width: 100%;
  height: auto;
}

body {
  margin: 0;
  font-family: ${props => props.theme.font.body}
  background-color: $white;
  font-size: 16px;
}

/* body > tr { display: table !important;} */

main {
  padding-top: 60px;
}
h1,
h2,
p {
  margin-top: 0;
}



p, nav a, aside a, a, span, footer, header, div {
  font-family: ${props => props.theme.font.body}
}
form,
form .form-group,
form .form-group label,
form .form-group input.form-control,
form .form-group textarea.form-control,
form button.btn {
  font-family: ${props => props.theme.font.body};
}

`;
