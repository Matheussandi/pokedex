import React from 'react';
import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import { PokemonDetail } from '../../interfaces/PokemonDetail';
import { ListOnePokemon } from '../../services/ListOnePokemon'

import { CloseButton, Content, Features, Icon, IconName, ModalContainer, ModalRight, Overlay, Stats, TextStats } from './styles';

import weightPokemon from '../../images/weightPokemon.svg';
import heightPokemon from '../../images/heightPokemon.svg';
import powerPokemon from '../../images/power.svg';

interface Open {
    open: boolean;
    onClose: () => void;
}

export function Modal({open, onClose}: Open) {
    const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<PokemonDetail | undefined>(undefined);
    const { name } = useParams();

    useEffect(() => {
        if (!name) return;

        ListOnePokemon(name)
            .then((response) => setSelectedPokemonDetails(response))

    }, [name]);

    if (!open) return null;
    
    return (
        <>
        
            <Overlay className={`${selectedPokemonDetails?.types[0].type.name}`}>
                <ModalContainer>
                    <img src={selectedPokemonDetails?.sprites.front_default} alt="" />
                    <ModalRight>
                        Nome do Pokemon
                    <CloseButton 
                        onClick={onClose}
                    >X</CloseButton>

                    <Content>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum adipisci possimus eos harum dolor dicta illum praesentium, fuga ipsum reiciendis quaerat hic laudantium vero modi autem tenetur alias omnis iste?
                    </Content>
                    
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

                            <Icon style={{ border: 'none'}}>
                                <img src={powerPokemon} alt="heightPokemon" />
                                Indefinido
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

{/*                         <Porcentage>
                            {selectedPokemonDetails?.stats.map((type) => <progress value={type.base_stat} max="100"></progress>)}
                        </Porcentage> */}
                    </ModalRight>
                </ModalContainer>
            </Overlay>
        </>
    );
};