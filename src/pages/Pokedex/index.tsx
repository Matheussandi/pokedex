import { useEffect, useState } from 'react';
import { ListAllPokemons } from '../../services/ListAllPokemons';
import { PokemonDetail } from '../../interfaces/PokemonDetail';

import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { Cards } from '../../components/Cards';
import { Header } from '../../components/Header';
import { Search } from '../../components/Search';
import { Row } from 'react-awesome-styled-grid';

import { useNavigate } from 'react-router-dom';

import {
    Body,
    Title,
    Label
} from './styles';


export function Pokedex() {
    const [pokemons, setPokemons] = useState<PokemonDetail[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        ListAllPokemons().then((response) => setPokemons(response.results))
    }, []);

    const getPokemon = async (query: string) => {
        if (pokemons.map((p) => p.name).includes(query)) {
            navigate(`/pokemon/${query}`);
        } else {
            return null;
        }
    }

    return (
        <>
            <Header />

            <Container>
                <Body>
                    <Row>
                        <Title>Mais de 100 Pokemons para você escolher o seu favorito</Title>
                    </Row>

                    <Row>
                        <Search getPokemon={getPokemon} />
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
                                <Grid key={pokemon.id} item xs={5} sm={4} md={3} lg={2} >
                                    <Cards pokemon={pokemon} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Body>
            </Container>
        </>
    );
};