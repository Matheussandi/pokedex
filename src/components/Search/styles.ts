import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background: var(--background);
    box-shadow: 4px 4px 16px rgba(1, 28, 64, 0.1);
    border-radius: 40px;
    padding: 16px 32px;
    border: 1px solid #F1F1F1;

    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;

    display: flex;
    flex-direction: row;
    justify-content: space-around;

    button {
        background: var(--background);
        cursor: pointer;
        border: none;
    }
`

export const Input = styled.input`
    width: 100%;
    background: var(--background);
    border: none;

    font-family: 'Open Sans', sans-serif;;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;

    &:focus {
        box-shadow: 0;
        outline: 0;
    }

`