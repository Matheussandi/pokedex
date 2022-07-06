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
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    

    margin-left: 15%;

    @media (max-width: 600px) {
        font-size: small;
        margin-left: 25%;
        /* right: -25%; */
    }
`

export const ImageCard = styled.div`
    border-radius: 15px;

    @media (max-width: 600px) {
        img {
            width: 20vw;
        }
    }
`

export const Types = styled.div`
    font-size: 15px;
    flex-direction: column;
    font-family: sans-serif;
    
`
export const Canto = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    position: relative;
    font-weight: 500;
    margin-right: 1.5rem;
    /* right: -15%; */
    color: #000;
    opacity: 0.5;
`

export const TypesSpan = styled.h4`
    margin-top: 6px;
    text-align: center;
    font-size: small;
    font-weight: 500;
    /* box-shadow: inset 0 -2px 0 rgba(0, 0, 0, 0.18); */
    padding: 6px 5px;
    /* background: #000; */
    /* background-blend-mode: soft-light; */
    /* background-color: #5cdfc7; */
    border-radius: 38px;
`
