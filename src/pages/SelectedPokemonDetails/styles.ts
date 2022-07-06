import styled from "styled-components";


export const ContainerCard = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #f5f1ff;
`

export const CardClass = styled.div`
    width: 30rem;
    min-height: 30rem;
    height: max-content;
    background-color: var(--background);
    display: flex;
    flex-direction: column;
    color: var(--body);
    font-family: 'Open Sans', sans-serif;

    border-radius: 15px;

    margin-top: -5rem;
    
    box-shadow: 0 8px 14px -6px;
    transition: 0.4s ease-in-out;
    &:hover {
        box-shadow: 0 8px 26px -6px;
        margin-bottom: 0.4rem;
    }

    @media (max-width:600px) {
        width: 20rem;
        min-height: 30rem;
    }
`

export const HeaderCard = styled.div`
    margin: 0.5rem;
    height: 3rem;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: large;
    font-family: 'Karla', sans-serif;
    font-weight: 700;
    position: relative;

    text-shadow: 4px 4px 4px rgba(33, 33, 33, 0.1);
`

export const IdCard = styled.div`
    position: absolute;
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
    right: 0;
`

export const ImageCard = styled.div`
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const SubTitle = styled.div`
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    font-size: 14px;
    text-align: justify;
    margin: 0 1.2rem;
    margin-bottom: 1rem;
`
export const Features = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    margin-bottom: 20px;

    img {
        width: 16px;
        height: 16px;
        margin-right: 5px;
    }
`

export const Icon = styled.div`
    padding: 0 30px;

    border-right: 1px solid #E0E0E0;
`

export const IconName = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 10px;

    font-weight: 400;
    color: #767676;
`

export const Stats = styled.div`
    display: inline-block;
    margin: 0 5% 5% 5%;

    @media screen and (max-width: 600px) {
        font-size: small;
        
    }
`
export const TextStats = styled.div`
    margin-top: 2px;

    @media screen and (max-width: 600px) {
        margin-top: 0;
        font-size: 7.5px;
    }
`

export const NumberPorcentage = styled.div`
    display: flex;
    flex-direction: column;
    float: right;
    margin: -3px 20px 0 20px;
    
    @media screen and (max-width: 600px) {
        float: right;
        margin: 0;
        gap: -2px;
    }
`

export const Porcentage = styled.div`
    display: flex;
    flex-direction: column;
    float: right;

    gap: 7px;
    

    progress {
    display: block;
    width: 10em;
    height: 0.7em;
    margin-top: 6px;
    border-radius: 20px;
    overflow: hidden;
    border: none;
    }

    progress::-webkit-progress-value {
        border-radius: 10px;
    }
    progress::-webkit-progress-bar {
        background-color: #fff; width: 100%;
    }

    @media screen and (max-width: 600px) {
        width: 11em;
        height: 4em;
        gap: 0;

        margin-top: -5px;
    }
`

export const Back = styled.button`
    position: absolute;
    background-color: #FFF;
    text-align: center;
    justify-content: center;
    margin: 1.3rem;
    cursor: pointer;

    border: none;
    border-radius: 50%;
    padding: 0.5rem 0.7rem 0.3rem 0.7rem;
    font-size: medium;


    box-shadow: 0 8px 14px -6px rgba(0, 0, 0, 0.5);
    transition: 0.4s ease-in-out;
    &:hover {
        box-shadow: 0 8px 26px -6px;
        margin-bottom: 0.4rem;
    }

`