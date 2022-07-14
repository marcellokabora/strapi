import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    /* @font-face {
        font-family: "Lato";
        src: url('/font/font/Lato/Lato-Black.ttf');
    } */
    body {
        margin: 0;
        padding: 0;
        font-family: 'Lato', sans-serif;
    }

    .mapboxgl-popup-content {
        background: black !important;
        border: 1px solid dimgrey;
        border-radius: 2px;
        padding: 0 !important;
    }
    .mapboxgl-popup-tip {
        display: none;
    }
    .mapboxgl-popup-close-button{
        display: none;
    }
`

export default GlobalStyles