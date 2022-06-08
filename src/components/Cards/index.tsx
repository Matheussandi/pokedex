import { useNavigate } from 'react-router-dom';
import { PokemonDetail } from '../../interfaces/PokemonDetail';
import { Canto, Card, Header, ImageCard, Types } from './styles';

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
            >
                <Header>
                    {pokemon.name}

                    <Types>
                        {pokemon.types.map((type) => <h4>{type.type.name}</h4>)}
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