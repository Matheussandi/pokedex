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
`