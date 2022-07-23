import styled from "styled-components";

interface BoxProps {
  color: string;
}

export const Card = styled.section<BoxProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 1em;
    border-radius: 0.5em;
    cursor: pointer;
    color: #000;
    font-family: 'Inter';
    background: ${props => props.color};
    color: white;
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
    margin-right: 0.8rem;
    position: relative;
    font-weight: 500;
    color: #000;
    opacity: 0.5;

    @media (max-width: 600px) {
        margin-right: 1.5rem;   
    }
`

export const TypesSpan = styled.div<BoxProps>`
    margin-top: 6px;
    text-align: center;
    font-size: small;
    font-weight: 500;
    padding: 6px 5px;
    background-color: #fff;
    border-radius: 38px;
    background: ${props => props.color}
`
