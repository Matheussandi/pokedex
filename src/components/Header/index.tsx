import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../images/logo.svg";

import { Container, Row, Col } from 'react-awesome-styled-grid';

import { NavBar, Menu } from "./styles";

export function Header() {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/`)
    }

    return (
        <>
            <NavBar>
                <Container>
                    <Row align="center">
                        <Col sm={2} align="center">
                            <img
                                onClick={() => handleClick()}
                                style={{ cursor: 'pointer' }}
                                src={logo}
                                width="159px"
                                height="60px;"
                                alt="logo"
                            />
                        </Col>
                        <Col sm={6} align="center">
                            <Menu>
                                <ul>
                                    <li>
                                        <NavLink
                                            to="/"
                                            style={({ isActive }) => ({
                                                borderBottom: isActive ? '3px solid #212121' : '#fff',
                                                fontWeight: isActive ? '700' : '400'
                                            })}
                                        >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/pokemons"
                                            style={({ isActive }) => ({
                                                borderBottom: isActive ? '3px solid #212121' : '#fff',
                                                fontWeight: isActive ? '700' : '400'
                                            })}
                                        >
                                            Pokemons
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink
                                            to="/contact"
                                            style={({ isActive }) => ({
                                                borderBottom: isActive ? '3px solid #212121' : '#fff',
                                                fontWeight: isActive ? '700' : '400'
                                            })}
                                        >
                                            Contato
                                        </NavLink>
                                    </li>
                                </ul>
                            </Menu>
                        </Col>
                    </Row>
                </Container>
            </NavBar>
        </>
    )
}