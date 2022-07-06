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
      /* background-color: #a1a1a1; */
      /* background: linear-gradient(8.46deg, #676767 -0.58%, #a1a1a1 108.38%); */

      background: #898889;

      h4 {
        background-color: #a0a1a0;
      }

      progress::-webkit-progress-value {
          background-color: #a0a1a0 !important;
        }
    }

    .grass, .bug {
        background: #49d0b1;
        /* background: linear-gradient(8.46deg, #46A487 -0.58%, #46D7AB 108.38%); */

        h4 {
          background-color: #5cdfc7;
        }

        progress::-webkit-progress-value {
          background-color: #49d0b1 !important;
        }
    }

    .ice, .water {
      /* background: #A2CFF0; */
      /* background: linear-gradient(8.46deg, #4676A4 -0.58%, #46C5D7 108.38%); */
      background: #76bdfe;

      h4 {
        background-color: #8fd0ff;
      }

      progress::-webkit-progress-value {
        background-color: #76bdfe !important;
      }
    }

    .fire, .fighting, .dragon {
      /* background: #f76545; */
      background: #FB6C6C;
      /* background: linear-gradient(8.46deg, #d45c5e -0.58%, #FB6C6C 108.38%); */

      h4 {
          background-color: #fc8584;
        }

        progress::-webkit-progress-value {
        background-color: #FB6C6C !important;
    }
    }

    .normal, .gosth {
      /* background-color: #76AADB; */
      background: #F2CDD6;
      /* background: linear-gradient(8.46deg, #cdafb6 -0.58%, #f2cdd6 108.38%); */

      h4 {
        background-color: #f7dce5;
      }

      progress::-webkit-progress-value {
        background-color: #f7dce5 !important;
      }
    }

    .poison, .psychic, .fairy, .ghost {
      /* background-color: #A974BC; */
      /* background: linear-gradient(8.46deg, #6c4979 -0.58%, #A974BC 108.38%); */
      background: #a499c1;

      h4 {
        background-color: #bdb0d4;
      }

      progress::-webkit-progress-value {
        background-color: #a499c1 !important;
      }
    }

    .ground {
      /* background-color: #9b897b; */
      /* background: linear-gradient(8.46deg, #716459 -0.58%, #baa392 108.38%); */

      background: #9d8979;

      h4 {
        background-color: #baa392;
      }

      progress::-webkit-progress-value {
        background-color: #9d8979 !important;
      }
    }

    .electric {
      /* background-color: #F7C545; */
      /* background: #FFCE4B; */
      /* background: linear-gradient(8.46deg, #d3ae4b -0.58%, #FFCE4B 108.38%); */

      background: #ffd76f;

      h4 {
        background-color: #fee57e;
      }

      progress::-webkit-progress-value {
        background-color: #ffd76f !important;
      }
    }
`