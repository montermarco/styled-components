 import { createGlobalStyle } from 'styled-components'

 const GlobalStyle = createGlobalStyle`
    //*? we get 100% width 60px, no 100% plus 60px
    html {
        box-sizing: border-box;
    }

    //*? make width 100% and fixed header that pushes the content down
    *, *:before, *:after {
        box-sizing: inherit;
    }
 
    body {
        margin: 0;
        padding: 65px 0 0:
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
        "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    
 `;

 export default GlobalStyle;

