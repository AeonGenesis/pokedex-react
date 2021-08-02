import { SearchIcon } from "@chakra-ui/icons";
import React, { useState } from "react";

import "./Pokedex.css";

import PokemonCard from "../PokemonCard/PokemonCard";

function Pokedex({ pokemon }) {
  const [search, setSearch] = useState("");

  const filteredPokemon =
    search.length === 0
      ? pokemon
      : pokemon.filter((p) =>
          p.name.toLowerCase().includes(search.toLocaleLowerCase())
        );
  return (
    <>
      <div className="title-bar">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search pokemon"
          onChange={(event) => setSearch(event.target.value)}
        />
      </div>

      <div className="pokemon-card-grid">
        <PokemonCard pokemon={filteredPokemon} />
      </div>
    </>
  );
}

export default Pokedex;
