import styled from 'styled-components';
import Yellow from "../../images/yellow.svg"

export const Container = styled.main`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2.5rem 1rem;
`

export const Title = styled.h1`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 45px;
    line-height: 76px;
    color: var(--text-title);

    strong {
        background: url(${Yellow});
        background-size: 100% 100%;
        background-position-y: 10px;
    }
`

export const SubTitle = styled.h2`
    font-family: sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 36px;
    color: var(--text-body);

    letter-spacing: 0.02em;
`

export const Button = styled.button`
    background: #48D0B0;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.18);
    border-radius: 11px;
    padding: 17px 35px;
    margin-top: 43px;
    width: fit-content;
    border: none;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;

    cursor: pointer;

    &:hover {
        filter: brightness(.9);
        transition: 0.3s;
    }
`