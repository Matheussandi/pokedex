import styled from "styled-components";

export const Overlay = styled.div`
    /* background-color: rgba(0, 0, 0, 0.5); */
    position: fixed;
    width: 100%;
    height: 100%;
`

export const ModalContainer = styled.div`
    max-width: 600px;
    width: 100%;
    position: fixed;
    top: 40%;
    left: 60%;
    transform: translate(-80%, -50%);
    display: flex;
    background-color: #ffffff;
    box-shadow: 0px 0px 18px 0px rgba(0, 0, 0, 0.75);

    img {
        width: 250px;
        object-fit: cover;
    }

    @media screen and (max-width: 500px) {
        flex-direction: column;
        top: 0;
        left: 0;
        transform: none;
        width: 100%;
        height: 100vh;

        img {
            width: 100%;
        }
    }
`

export const ModalRight = styled.p`
    width: 100%;
    color: black;
`

export const CloseButton = styled.p`
    position: fixed;
    top: 8px;
    right: 8px;
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: 3rem;
    padding: 1rem 2rem;
    color: black;
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
`
export const TextStats = styled.div`
    margin-top: 2px;
`

export const Porcentage = styled.div`
    display: inline-block;

`