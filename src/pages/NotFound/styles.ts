import styled from 'styled-components';

export const Center = styled.div`
    background: var(--danger);
    width: 100vw;
    height: 100vh;
`

export const Text = styled.div`
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 400px;
    position: absolute;

    width: 100vw;
    height: 100vh;

    img {
        position: absolute;
        width: 30vw;
        height: 60vh;
    }

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    color: rgba(0, 0, 0, 0.5);

    @media (max-width: 768px) {
        font-size: 200px;

        img {
            position: absolute;
            width: auto;
            height: 30vh;
        }
    }
`

export const Button = styled.button`
    font-family: sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 23px;
    line-height: 27px;
    border: none;
    position: absolute;
    margin-top: 75vh;
    padding: 20px 78px;

    cursor: pointer;

    color: var(--text-body);

    background: var(--yellow);
    box-shadow: inset 0px -9px 0px rgba(0, 0, 0, 0.18);
    border-radius: 11px;
`