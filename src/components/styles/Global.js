import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "Lato";
        src: local("Lato"),
        url("./assets/font/Lato/Lato-Regular.ttf") format("truetype");
        font-weight: normal;
    }
    @font-face {
        font-family: 'Lato';
        font-weight: bold;
        src: local('Lato'), url(./assets/font/Lato-Bold.ttf) format('truetype');
    }
    @font-face {
        font-family: 'Lato';
        font-weight: lighter;
        src: local('Lato'), url(./assets/font/Lato-Light.ttf) format('truetype');
    }
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

    .bounce-3 {
        animation-name: bounce-3;
        animation-timing-function: ease;
        animation-duration: 2s;
        animation-iteration-count: 3;

    }
    @keyframes bounce-3 {
        0%   { transform: scale(1,1)      translateY(0); }
        30%  { transform: scale(.9,1.1)   translateY(-20px); }
        50%  { transform: scale(1.05,.95) translateY(0); }
        57%  { transform: scale(1,1)      translateY(-7px); }
        100% { transform: scale(1,1)      translateY(0); }
    }

`

export default GlobalStyles