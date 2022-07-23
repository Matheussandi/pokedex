import { useEffect, useState, useCallback } from 'react';

import api from '../../services/api';

import { Row } from 'react-awesome-styled-grid';
import { ImArrowDown2 } from 'react-icons/im';
import { Container } from '@mui/material';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import { Cards } from '../../components/Cards';
import { Header } from '../../components/Header';
import { Search } from '../../components/Search';

import {
    Body,
    Title,
    ButtonMore
} from './styles';

interface PokemonProps {
    id: string;
    name: string;
}

export function Pokedex() {
    const numberPokemons = 18;
    const numberMaxPokemons = 750;

    const [pokemons, setPokemons] = useState<PokemonProps[]>([]);
    const [pokemonSearch, setPokemonSearch] = useState('');
    const [pokemonsOffsetApi, setPokemonsOffsetApi] = useState(numberPokemons);

    // Filtra os pokémons a partir da string digita no input de busca
    const handleSearchPokemons = useCallback(async () => {
        const response = await api.get(`/pokemon?limit=${numberMaxPokemons}`);

        setPokemonSearch(pokemonSearch.toLocaleLowerCase());
        // Valida s nomes dos pokémons no valor da variável pokemonSearch
        const pokemonsSearch = response.data.results.filter(
            ({ name }: PokemonProps) => name.includes(pokemonSearch),
        );
        setPokemons(pokemonsSearch);
    }, [pokemonSearch]);

    // Carrega uma lista inicial de pokémons
    const handlePokemonsListDefault = useCallback(async () => {
        const response = await api.get('/pokemon', {
            params: {
                limit: numberPokemons,
            },
        });
        setPokemons(response.data.results);
    }, []);

    useEffect(() => {
        // Busca será realizada quando a string tiver mais de 2 caracteres
        const isSearch = pokemonSearch.length >= 2;

        if (isSearch) handleSearchPokemons();
        else handlePokemonsListDefault();
    }, [pokemonSearch, handlePokemonsListDefault, handleSearchPokemons]);

    // Adiciona novos pokémons a lista
    const handleMorePokemons = useCallback(
        async (offset: any) => {
            const response = await api.get(`/pokemon`, {
                params: {
                    limit: numberPokemons,
                    offset,
                },
            });

            setPokemons(state => [...state, ...response.data.results]);
            setPokemonsOffsetApi(state => state + numberPokemons);
        },
        [numberPokemons],
    );

    return (
        <>
            <Header />

            <Container>
                <Body>
                    <Row>
                        <Title>Mais de 250 Pokemons para você escolher o seu favorito</Title>
                    </Row>

                    <Row>
                        <Search value={pokemonSearch} onChange={setPokemonSearch} />
                    </Row>

{/*                 <Label>
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
                    </Label> */}

                    <Box mt={5} mb={1}>
                        <Grid container spacing={2}>
                            {pokemons.map((pokemon) => (
                                <Grid key={pokemon.name} item xs={5} sm={4} md={3} lg={2} >
                                    <Cards name={pokemon.name} />
                                </Grid>
                            ))}
                        </Grid>
                    </Box>

                    {pokemonSearch.length <= 2 && (
                        <ButtonMore
                            type="button"
                            onClick={() => handleMorePokemons(pokemonsOffsetApi)}
                        >
                            <ImArrowDown2 />
                        </ButtonMore>
                    )}
                </Body>
            </Container>
        </>
    );
};