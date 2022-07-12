import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Lato";
        src: url('/assets/font/font/Lato/Lato-Black.ttf');
    }
    body {
        margin: 0;
        padding: 0;
        font-family: 'Lato', sans-serif;
    }
`

export default GlobalStyles