import { useEffect, useState } from 'react';
import { ListAllPokemons } from '../../services/ListAllPokemons';
import { PokemonDetail } from '../../interfaces/PokemonDetail';

import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { Cards } from '../../components/Cards';
import { Header } from '../../components/Header';
import { Row } from 'react-awesome-styled-grid';
import lupa from '../../images/lupa.svg';

import {
    Body,
    Title,
    Search,
    Input,
    Label
} from './styles';

export function Pokedex() {
    const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);

    useEffect(() => {
        ListAllPokemons().then((response) => setPokemons(response.results))
    }, []);

    return (
        <>
            <Header />

            <Container>
                <Body>
                    <Row>
                        <Title>Mais de 250 Pokemons para você escolher o seu favorito</Title>
                    </Row>

                    <Row>
                        <Search>
                            <Input id="find-pokemon"
                                type="text"
                                placeholder="Pesquisar pokemon">
                            </Input>

                            <button>
                                <img src={lupa} alt="lupa" />
                            </button>
                        </Search>

                    </Row>

                    <Label>
                        <select name="type" id="type">
                            <option value="">Tipo</option>
                            <option value="fire">Fogo</option>
                            <option value="plant">Planta</option>
                            <option value="eletric">Elétrico</option>
                            <option value="water">Água</option>
                            <option value="normal">Normal</option>
                        </select>

                        <select name="attack" id="attack">
                            <option value="">Ataque</option>
                        </select>

                        <select name="defense" id="defense">
                            <option value="">Defesa</option>
                        </select>
                    </Label>

                    <Box mt={5} mb={2}>
                        <Grid container spacing={2}>
                            {pokemons.map((pokemon) => (
                                <>
                                    <Grid item xs={5} sm={4} md={3} lg={2} >
                                        <Cards pokemon={pokemon} />
                                    </Grid>
                                </>
                            ))}
                        </Grid>
                    </Box>
                </Body>
            </Container>
        </>
    );
};