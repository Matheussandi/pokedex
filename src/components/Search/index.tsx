import { useState } from "react";

import { Container, Input } from "./styles";
import lupa from '../../images/lupa.svg';

export function Search(props: any) {
    const [search, setSearch] = useState('');

    function PokemonLowerCase() {
        const name = search.toLocaleLowerCase();
        
        // fazer o filtro para pegar somente os pokemons iguais

        return name;
    }

    return (
        <>
            <Container>
                <Input
                    id="find-pokemon"
                    type="text"
                    placeholder="Pesquisar pokemon"
                    onChange={(e) => setSearch(e.target.value)}  
                >
                </Input>

                <h1>{search}</h1>

                <button onClick={(e) => props.getPokemon(PokemonLowerCase())}>
                    <img src={lupa} alt="lupa" />
                </button>
            </Container>
        </>
    )
}