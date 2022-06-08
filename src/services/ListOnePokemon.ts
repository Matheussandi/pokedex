import axios from "axios";
import { PokemonDetail } from "../interfaces/PokemonDetail";

export async function ListOnePokemon(name: string): Promise<PokemonDetail> {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${name}`;

    const response = await axios.get<PokemonDetail>(endpoint);

    return response.data;
}