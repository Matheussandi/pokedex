import axios from "axios";
import { PokemonDetail } from "../interfaces/PokemonDetail";
import { ListOnePokemon } from "./ListOnePokemon";

export interface IPokemonList {
    id: number;
    name: string;
    url: string;
}

interface IListPokemons {
    count: number;
    next: string | null;
    previous: string | null;
    results: PokemonDetail[]
}

export async function ListAllPokemons(): Promise<IListPokemons> {
    const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`;

    const response = await axios.get<IListPokemons>(endpoint);

    const promiseArr = response.data.results.map(({ name }) => ListOnePokemon(name));
    
    const resultsPromise = await Promise.all(promiseArr);

    return {
        ...response.data,
        results: resultsPromise
    }
}