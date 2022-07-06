import axios from "axios";
import { PokemonsSpecies } from "../interfaces/PokemonDetail";

export async function ListAboutPokemon(name: string): Promise<PokemonsSpecies> {
    const endpoint = `https://pokeapi.co/api/v2/pokemon-species/${name}`;

    const response = await axios.get<PokemonsSpecies>(endpoint);

    return response.data;
}