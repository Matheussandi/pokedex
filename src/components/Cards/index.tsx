import { useNavigate } from 'react-router-dom';
import { PokemonDetail } from '../../interfaces/PokemonDetail';
import { Canto, Card, Header, ImageCard, Types, TypesSpan } from './styles';

import { Modal } from '../Modal/index';

/* import Modal from 'react-modal'; */
import {useState} from 'react';


interface IPokedexCard {
    pokemon: PokemonDetail;
}

export function Cards({ pokemon }: IPokedexCard) {
    const [openModal, setOpenModal] = useState(false);

    const navigate = useNavigate();


    function handleClick() {
        navigate(`/pokemon/${pokemon.name}`)
    }

    return (
        <>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(false)}
            />

            <Card
                className={`${pokemon.types[0].type.name}`}
                onClick={() => handleClick()}
                /* onClick={() => setOpenModal(true)} */
            >

                <Header>
                    {pokemon.name}

                    <Types>
                        {pokemon.types.map((type) => 
                        <TypesSpan
                            key={type.type.name}
                        >
                            {type.type.name}
                        </TypesSpan>)}
                    </Types>
                </Header>

                <ImageCard >
                    <Canto>
                        #{pokemon.id.toString().padStart(3, '0')}
                    </Canto>

                    <img src={pokemon.sprites.front_default} alt="imagePokemonCard" />
                </ImageCard>
            </Card>
        </>
    );
};