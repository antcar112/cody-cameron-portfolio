import { createGlobalStyle } from 'styled-components';

import { media } from '../utils/media';

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
  font-family: ${props => props.theme.font.body};
  background-color: $white;
  font-size: 16px;
}

main {
  padding-top: 60px;

  ${media.down.sm} {
		padding-top: ${props => props.theme.navHeightMobile};
	}
}

h1,
h2,
p {
  margin-top: 0;
  font-weight: 400;
}

p, nav a, aside a, a, span, footer, header, div {
  font-family: ${props => props.theme.font.body}
}
`;
