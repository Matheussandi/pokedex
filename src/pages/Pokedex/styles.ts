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
        padding: 0 40px;

        @media (max-width: 768px) {
            margin-right: 30px;
            margin-bottom: 10px;
        }

        @media (max-width: 600px) {
            padding: 0 2px;
        }
    }
`

export const ButtonMore = styled.button`
    margin: 2% 45%;
    padding: 0.7rem 0.2rem 0.5rem 0.2rem;
    cursor: pointer;

    border: none;
    background-color: #48D0B0;
    border-radius: 3px;

    @media (max-width: 600px) {
            margin: 1% 50% 1% 35%;
        }
`