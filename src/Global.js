 import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
       html {
        box-sizing: border-box;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        margin: 15px;
        background-color: #E0E5EC;        
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyle;