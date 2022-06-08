import styled from "styled-components";

export const Card = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 1em;
    border-radius: 0.5em;
    cursor: pointer;
    color: #fff;
    font-family: 'Inter';
`

export const Header = styled.div`
    font-family: 'Inter';
    margin-left: 15%;

    @media (max-width: 600px) {
        right: -25%;
    }
`

export const ImageCard = styled.div`
    border-radius: 15px;

    @media (max-width: 600px) {
        img {
            width: 50px;
        }
    }
`

export const Types = styled.div`
    font-size: 15px;
    flex-direction: column;
    font-family: sans-serif;
`
export const Canto = styled.div`
    position: relative;
    right: -15%;
    color: #000;
    opacity: 0.5;

    @media (max-width: 600px) {
        right: -25%;
    }
`