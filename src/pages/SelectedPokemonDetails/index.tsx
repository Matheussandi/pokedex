import { useEffect, useState } from 'react';
import { PokemonDetail } from '../../interfaces/PokemonDetail';

import { Header } from '../../components/Header';

import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

import { useParams } from 'react-router-dom';

import { ListOnePokemon } from '../../services/ListOnePokemon'
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
    Porcentage
} from './styles';


import weightPokemon from '../../images/weightPokemon.svg';
import heightPokemon from '../../images/heightPokemon.svg';

export function SelectedPokemonDetails() {
    const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<PokemonDetail | undefined>(undefined);
    const { name } = useParams();

    useEffect(() => {
        if (!name) return;

        ListOnePokemon(name)
            .then((response) => setSelectedPokemonDetails(response))

    }, [name]);

    return (
        <>
            <Header />

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
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, ab! Nulla beatae illum distinctio praesentium odit, libero aliquid fuga tenetur soluta quam id ea numquam consectetur repellat suscipit reiciendis totam!
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

                        <Porcentage>
                            {selectedPokemonDetails?.stats.map((type) => <Typography>{type.base_stat}</Typography>)}
                        </Porcentage>
                    </Container>
                </CardClass>
            </ContainerCard>
        </>
    );
};