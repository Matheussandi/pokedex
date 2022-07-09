import { useState } from "react";

import { Container, Input } from "./styles";
import lupa from '../../images/lupa.svg';

export function Search(props: any) {
    const [search, setSearch] = useState('');

    function PokemonLowerCase() {
        const name = search.toLocaleLowerCase();
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
                    maxLength={20}
                >
                </Input>

                <button onClick={(e) => props.getPokemon(PokemonLowerCase())}>
                    <img src={lupa} alt="lupa" />
                </button>
            </Container>
        </>
    )
}