import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #ffffff;
    --yellow: #f5db13;
    --green: #33cc95;

    --danger: #D93E30;

    --text-title: #282828;
    --text-body: #212121;

    --dark: #212121
  }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .style, .dark, .rock {
      background-color: #a1a1a1;
    }

    .grass, .bug {
        background: #70A83B;
    }

    .ice, .water {
      background: #A2CFF0;
    }

    .fire, .fighting, .dragon {
      background: #f76545;
    }

    .normal, .gosth {
      background-color: #76AADB;
    }

    .poison, .psychic, .fairy, .ghost {
      background-color: #A974BC;
    }

    .ground {
      background-color: #9b897b;
    }

    .electric {
      background-color: #F7C545;
    }
`