import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header";
import { Row, Col } from 'react-awesome-styled-grid';

import Banner from "../../images/Banner.svg"

import { Container, Button, SubTitle, Title } from "./styles";

export function Home() {
    const navigate = useNavigate();

    return (
        <>
            <Header />

            <Container>
                <Row reverse={['xs', 'sm']}>
                    <Col md={3} style={{ paddingTop: 38 }}>
                        <Title>
                            Qual pokemon você <strong>escolheria</strong>?
                        </Title>
                        <SubTitle>
                            Você pode ser o tipo de Pokémon, seus pontos fortes, fracos e habilidades.
                        </SubTitle>
                        <Button onClick={() => navigate('/pokemons')}>
                            Veja os pokemons
                        </Button>
                    </Col>
                    <Col md={5}>
                        <img src={Banner} alt="banner" />
                    </Col>
                </Row>
            </Container>
        </>
    )
}