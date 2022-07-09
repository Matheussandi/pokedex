import { PokemonDetail } from '../../interfaces/PokemonDetail';

import { useNavigate } from 'react-router-dom';

import {
    Canto,
    Card,
    Header,
    ImageCard,
    Types,
    TypesSpan
} from './styles';

interface IPokedexCard {
    pokemon: PokemonDetail;
}

export function Cards({ pokemon }: IPokedexCard) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/pokemon/${pokemon.name}`)
    }

    return (
        <>
            <Card
                className={`${pokemon.types[0].type.name}`}
                onClick={() => handleClick()}
            /* style={{backgroundColor: defaultTheme.colors.backgroundType.dark}} */
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