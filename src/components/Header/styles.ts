import styled from 'styled-components';

export const NavBar = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    height: 93px;
    width: 100%;
    align-items: center;
    background-color: var(--background);

    font-family: 'Open Sans';
    font-style: normal;
    font-size: 25px;
    line-height: 34px;

    box-shadow: 0px 4px 16px rgba(1, 28, 64, 0.2);
`

export const Menu = styled.nav`
    & > ul {
        display: flex;
        flex-direction: row;
        list-style: none;
        
        li ~ li {
            margin-left: 50px;

            @media (max-width: 768px) {
                margin-left: 30px;
            }
        }

        a {
            text-decoration: none;
            color: #000000;
        }
    }
`