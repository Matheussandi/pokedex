import {
    Routes,
    Route
} from 'react-router-dom';

import { Home } from './pages/Home';
import { Pokedex } from './pages/Pokedex';
import { SelectedPokemonDetails } from './pages/SelectedPokemonDetails';
import { NotFound } from './pages/NotFound';

export function MainRoutes() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />}/>
                <Route path="/pokemons" element={<Pokedex />}/>
                <Route path="/pokemon/:name" element={<SelectedPokemonDetails />}/>

                <Route path='*' element={<NotFound />}/>
            </Routes>
        </>
    );
};