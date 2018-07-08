import { injectGlobal } from 'styled-components';
import { ColorScheme } from './styleConstants';

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Fira+Sans');
  @import url('https://fonts.googleapis.com/css?family=Open+Sans');
  @import url('https://fonts.googleapis.com/css?family=Raleway');
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    color: ${ColorScheme.mainText};
  }
  h4, p {
    font-family: 'Open Sans', sans-serif;
  }
  hr {
    width: 50%;
  }
  a {
    text-decoration: none;
    font-weight: bold;
    transition: all .3s ease;
    &:hover {
      text-decoration: none;
      color: ${ColorScheme.primary};
    }
    &:focus {
      text-decoration: none;
      color: ${ColorScheme.primary};
    }
  }
`;
