import styled from 'styled-components';

export const Body = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 73px;
`

export const Title = styled.h1`
    margin: 0 auto;
    align-self: center;
    margin-bottom: 34px;

    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
        font-size: 35px;
    letter-spacing: 3px;
    text-align: center;

    color: var(--text-body);
`

export const Search = styled.div`
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

export const Label = styled.label`
    margin-top: 51px;

    select {
        font-family: 'Open Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;

        background: var(--background);

        box-shadow: 2px 2px 2px rgba(33, 33, 33, 0.1);
        border-radius: 4px;
        border: none;

        margin-right: 64px;
        padding: 0 51px;

        @media (max-width: 768px) {
            margin-right: 30px;
            margin-bottom: 10px;
        }
    }
`