import { useEffect, useState } from 'react';
import { PokemonDetail, PokemonsSpecies } from '../../interfaces/PokemonDetail';

import { Container } from '@mui/material';

import { useNavigate, useParams } from 'react-router-dom';

import { ListOnePokemon } from '../../services/ListOnePokemon'
import { ListAboutPokemon } from '../../services/ListAboutPokemon'

import {
    CardClass,
    ContainerCard,
    HeaderCard,
    IdCard,
    ImageCard,
    SubTitle,
    Features,
    Icon,
    Stats,
    TextStats,
    Porcentage,
    IconName,
    NumberPorcentage,
    Back
} from './styles';

import weightPokemon from '../../images/weightPokemon.svg';
import heightPokemon from '../../images/heightPokemon.svg';
import powerPokemon from '../../images/power.svg';
import back from "../../images/back-arrow.svg";

export function SelectedPokemonDetails() {
    const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<PokemonDetail | undefined>(undefined);
    const [aboutPokemon, setAboutPokemon] = useState<PokemonsSpecies | undefined>(undefined);
    const { name } = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        if (!name) return;

        ListOnePokemon(name)
            .then((response) => setSelectedPokemonDetails(response))

        ListAboutPokemon(name)
            .then((response) => setAboutPokemon(response))

    }, [name]);

    return (
        <>
            <Back
                onClick={() => navigate('/pokemons')}
            >
                <img src={back} alt="Back" />
            </Back>

            <ContainerCard
                className={`${selectedPokemonDetails?.types[0].type.name}`}
            >
                <CardClass>
                    <Container maxWidth="lg">
                        <HeaderCard>
                            {selectedPokemonDetails?.name}
                            <IdCard>
                                #{selectedPokemonDetails?.id.toString().padStart(3, '0')}
                            </IdCard>
                        </HeaderCard>

                        <ImageCard>
                            <img width="50%" height="auto" src={selectedPokemonDetails?.sprites.front_default} alt="" />
                        </ImageCard>

                        <SubTitle>
                            {aboutPokemon?.flavor_text_entries.find((test) => test.language.name === 'es')?.flavor_text}
                        </SubTitle>

                        <Features>
                            <Icon>
                                <img src={weightPokemon} alt="weightPokemon" />
                                {selectedPokemonDetails?.weight.toString()
                                    .slice(0, selectedPokemonDetails.weight.toString().length - 1)
                                }
                                .
                                {selectedPokemonDetails?.weight.toString()
                                    .slice(
                                        selectedPokemonDetails.weight.toString().length - 1,
                                        selectedPokemonDetails.weight.toString().length,
                                    )}{' '}
                                kg
                                <IconName>
                                    Peso
                                </IconName>
                            </Icon>
                            <Icon>
                                <img src={heightPokemon} alt="heightPokemon" />
                                {selectedPokemonDetails?.height.toString()
                                    .slice(0, selectedPokemonDetails?.height.toString().length - 1)
                                }
                                .
                                {selectedPokemonDetails?.height.toString()
                                    .slice(
                                        selectedPokemonDetails.height.toString().length - 1,
                                        selectedPokemonDetails.height.toString().length
                                    )}{' '}
                                m
                                <IconName>
                                    Altura
                                </IconName>
                            </Icon>

                            <Icon style={{ border: 'none' }}>
                                <img src={powerPokemon} alt="heightPokemon" />
                                {/* Essa busca não é do poder principal, pois não identifiquei na API */}
                                {selectedPokemonDetails?.abilities.find(abilities => abilities.ability)?.ability.name}
                                <IconName>
                                    Poder Principal
                                </IconName>
                            </Icon>
                        </Features>

                        <Stats>
                            <TextStats>
                                Hp:
                            </TextStats>
                            <TextStats>
                                Ataque:
                            </TextStats>
                            <TextStats>
                                Defesa:
                            </TextStats>
                            <TextStats>
                                Ataque especial:
                            </TextStats>
                            <TextStats>
                                Defesa especial:
                            </TextStats>
                            <TextStats>
                                Velocidade:
                            </TextStats>
                        </Stats>

                        <NumberPorcentage>
                            {selectedPokemonDetails?.stats.map((type) =>
                                <TextStats key={type.stat.name}>
                                    {type.base_stat}
                                </TextStats>)}
                        </NumberPorcentage>

                        <Porcentage>
                            {selectedPokemonDetails?.stats.map((type) =>
                                <progress
                                    key={type.stat.name}
                                    value={type.base_stat}
                                    max="100"
                                ></progress>)}
                        </Porcentage>
                    </Container>
                </CardClass>
            </ContainerCard>
        </>
    );
};