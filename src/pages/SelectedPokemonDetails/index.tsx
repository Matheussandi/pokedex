import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import defaultTheme from '../../styles/theme';
import { Container } from '@mui/material';

import weightPokemon from '../../images/weightPokemon.svg';
import heightPokemon from '../../images/heightPokemon.svg';
import powerPokemon from '../../images/power.svg';
import back from "../../images/back-arrow.svg";

import pokemonTypes from '../../assets/types'
import api from '../../services/api';

import { Stats } from './Stats'

import {
    CardClass,
    ContainerCard,
    HeaderCard,
    IdCard,
    ImageCard,
    SubTitle,
    Features,
    Icon,
    IconName,
    Back
} from './styles';

export interface PokemonTypesProps {
    name?: string;
}

export interface PokemonProps {
    id: number;
    number: string;
    backgroundColor: string;
    image: string;
    specie: string;
    height: string;
    weight: string;
    stats: {
        hp: number;
        attack: number;
        defense: number;
        speed: number;
        specialAttack: number;
        specialDefense: number;
    };
    abilities: PokemonsAbilities[];
    type: PokemonTypesProps[];
}

interface TypePokemonResponse {
    type: {
        name: keyof typeof pokemonTypes;
    };
}

export interface PokemonsSpecies {
    flavor_text_entries: FlavorTextEntry[];
}

export interface FlavorTextEntry {
    flavor_text: string;
    language: {
        name: string;
        url: string;
    };
    version: string;
}

export interface PokemonsAbilities {
    ability: {
        name: string;
        url: string;
    }
}

export function SelectedPokemonDetails() {
    const [pokemon, setPokemon] = useState({} as PokemonProps);
    const [aboutPokemon, setAboutPokemon] = useState<PokemonsSpecies | undefined>(undefined);
    const [backgroundColor, setBackgroundColor] = useState<
        keyof typeof pokemonTypes
    >('normal');

    const { name } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        api.get(`/pokemon/${name}`).then(response => {
            const {
                id,
                weight,
                height,
                stats,
                sprites,
                abilities,
                types,
                species,
            } = response.data;

            setBackgroundColor(types[0].type.name);

            if (types[0].type.name === 'normal' && types.length > 1) {
                setBackgroundColor(types[1].type.name);
            }

            setPokemon({
                id,
                number: `#${'000'.substr(id.toString().length)}${id}`,
                backgroundColor: defaultTheme.colors.backgroundCard[backgroundColor],
                image:
                    sprites.other['official-artwork'].front_default ||
                    sprites.front_default,
                weight: `${weight / 10} kg`,
                specie: species.name,
                height: `${height / 10} m`,
                stats: {
                    hp: stats[0].base_stat,
                    attack: stats[1].base_stat,
                    defense: stats[2].base_stat,
                    specialAttack: stats[3].base_stat,
                    specialDefense: stats[4].base_stat,
                    speed: stats[5].base_stat,
                },
                abilities: abilities.map((pokemonAbilities: PokemonsAbilities) => ({
                    name: pokemonAbilities.ability.name,
                    url: pokemonAbilities.ability.url,
                })),
                type: types.map((pokemonType: TypePokemonResponse) => ({
                    name: pokemonType.type.name,
                })),
            });
        });
    });

    useEffect(() => {
        api.get(`/pokemon-species/${name}/`).then(response => {
            const {
                flavor_text_entries,
            } = response.data

            setAboutPokemon({
                flavor_text_entries: flavor_text_entries.map((pokemonSpecie: FlavorTextEntry) => ({
                    flavor_text: pokemonSpecie.flavor_text,
                    language: pokemonSpecie.language,
                    version: pokemonSpecie.version,
                }))
            })
        });
    });

    return (
        <>
            <Back
                onClick={() => navigate('/pokemons')}
            >
                <img src={back} alt="Back" />
            </Back>

            <ContainerCard color={defaultTheme.colors.backgroundCard[backgroundColor]}>
                <CardClass>
                    <Container maxWidth="lg">
                        <HeaderCard>
                            {name}
                            <IdCard>
                                {pokemon.number}
                            </IdCard>
                        </HeaderCard>

                        <ImageCard>
                            <img width="50%" src={pokemon.image} alt={`Imagem do pokémon ${name}`} />
                        </ImageCard>

                        <SubTitle>
                            {aboutPokemon?.flavor_text_entries.find((test) => test.language.name === 'en')?.flavor_text.replace('\f', ' ')}
                        </SubTitle>

                        <Features>
                            <Icon>
                                <img src={weightPokemon} alt="weightPokemon" />
                                {pokemon.weight}
                                <IconName>
                                    Peso
                                </IconName>
                            </Icon>
                            <Icon>
                                <img src={heightPokemon} alt="heightPokemon" />
                                {pokemon.height}
                                <IconName>
                                    Altura
                                </IconName>
                            </Icon>

                            <Icon style={{ border: 'none' }}>
                                <img src={powerPokemon} alt="powerPokemon" />
                                {pokemon.type && (
                                    <div style={{ display: 'inline' }}>
                                        {pokemon.type.map(pokemonType => pokemonType.name).shift()}
                                    </div>
                                )}
                                <IconName>
                                    Tipo
                                </IconName>
                            </Icon>
                        </Features>

                        {pokemon.stats &&
                            <Stats stats={pokemon.stats} color={defaultTheme.colors.backgroundCard[backgroundColor]} />
                        }
                    </Container>
                </CardClass>
            </ContainerCard>
        </>
    );
};