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

        h4 {
          background-color: #5cdfc7;
        }

        progress::-webkit-progress-value {
          background-color: #49d0b1 !important;
        }
    }

    .ice, .water {
      background: #76bdfe;

      h4 {
        background-color: #8fd0ff;
      }

      progress::-webkit-progress-value {
        background-color: #76bdfe !important;
      }
    }

    .fire, .fighting, .dragon {
      background: #FB6C6C;

      h4 {
          background-color: #fc8584;
        }

        progress::-webkit-progress-value {
        background-color: #FB6C6C !important;
    }
    }

    .normal, .gosth {
      background: #F2CDD6;

      h4 {
        background-color: #f7dce5;
      }

      progress::-webkit-progress-value {
        background-color: #f7dce5 !important;
      }
    }

    .poison, .psychic, .fairy, .ghost {
      background: #a499c1;

      h4 {
        background-color: #bdb0d4;
      }

      progress::-webkit-progress-value {
        background-color: #a499c1 !important;
      }
    }

    .ground {
      background: #9d8979;

      h4 {
        background-color: #baa392;
      }

      progress::-webkit-progress-value {
        background-color: #9d8979 !important;
      }
    }

    .electric {
      background: #ffd76f;

      h4 {
        background-color: #fee57e;
      }

      progress::-webkit-progress-value {
        background-color: #ffd76f !important;
      }
    }
`