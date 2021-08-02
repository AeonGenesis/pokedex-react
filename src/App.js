import React, { useState, useEffect } from "react";
import axios from "axios";
import { Route, Switch } from "react-router";

import Pokedex from "./components/Pokedex/Pokedex";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";

const pokemonUrl =
  "https://raw.githubusercontent.com/Biuni/PokemonGO-Pokedex/master/pokedex.json";

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const getPokemonData = async () => {
      const resp = await axios.get(pokemonUrl);
      setPokemon(resp.data.pokemon);
    };

    getPokemonData();
  }, []);

  return (
    <Switch>
      <Route exact path="/">
        <Pokedex pokemon={pokemon} />
      </Route>
      <Route exact path="/:pokemonid">
        <PokemonDetail pokemon={pokemon} />
      </Route>
    </Switch>
  );
}

export default App;
