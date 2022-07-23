import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import iconTypePokemon from '../../assets/types'

import api from '../../services/api';

import defaultTheme from '../../styles/theme';

import {
    Canto,
    Card,
    Header,
    ImageCard,
    Types,
    TypesSpan
} from './styles';

interface PokeProps {
    name: string;
}

interface PokemonTypesProps {
    name: string;
}

interface PokemonProps {
    id: string;
    number: string
    image: string;
    type: PokemonTypesProps[];
    backgroundColor: string;
    backgroundType: string;
}

export function Cards({ name }: PokeProps) {
    const [pokemon, setPokemon] = useState({} as PokemonProps);
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/pokemon/${name}`).then(response => {
            const { id, types, sprites } = response.data;

            let backgroundColor: keyof typeof iconTypePokemon = types[0].type.name;
            if (backgroundColor === 'normal' && types.length > 1) {
                backgroundColor = types[1].type.name;
            }

            setPokemon({
                id,
                number: `#${'000'.substr(id.toString().length)}${id}`,
                backgroundColor: defaultTheme.colors.backgroundCard[backgroundColor],
                backgroundType: defaultTheme.colors.backgroundType[backgroundColor],
                image: sprites.other['official-artwork'].front_default,
                type: types.map((pokemonType: any) => {
                    // Reconhece a variável como uma chave para os arrays pokemonTypes e colors.type
                    const typeName = pokemonType.type
                        .name as keyof typeof iconTypePokemon;

                    return {
                        name: typeName,
                    };
                }),
            });
        });
    }, [name]);

    function handleClick() {
        navigate(`/pokemon/${name}`)
    }

    return (
        <>
            <Card
                color={pokemon.backgroundColor}
                className={`${Types[0]}`}
                onClick={() => handleClick()}
            >

                <Header>
                    {name}

                    {pokemon.type && (
                        <div>
                            {pokemon.type.map(pokemonType => (
                                <TypesSpan key={pokemonType.name} color={pokemon.backgroundType}>
                                    <span>{pokemonType.name}</span>
                                </TypesSpan>
                            ))}
                        </div>
                    )}
                </Header>

                <ImageCard >
                    <Canto>
                        {pokemon.number}
                    </Canto>

                    <img
                        src={pokemon.image}
                        alt="imagePokemonCard"
                        style={{ height: 90 }}
                    />
                </ImageCard>
            </Card>
        </>
    );
};