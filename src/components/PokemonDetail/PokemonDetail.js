import React from "react";
import { useParams, Link } from "react-router-dom";

import "./PokemonDetail.css";

function PokemonDetail({ pokemon }) {
  const { pokemonid } = useParams();

  const currentPokemon = pokemon[pokemonid - 1];

  const pokemonName = currentPokemon.name;
  const pokemonImg = currentPokemon.img;
  const pokemonNextEvolutions = currentPokemon.next_evolution;
  const pokemonPrevEvolutions = currentPokemon.prev_evolution;

  return (
    <div className="container">
      <div className="navigation-buttons">
        <button className="home" value="home">
          <Link to={"/"}>home</Link>
        </button>
      </div>

      <div className="pokemon-name">
        <h1>{pokemonName}</h1>
      </div>

      <div className="pokemon-number">{currentPokemon.num}</div>

      <div className="pokemon-img">
        <img src={pokemonImg} alt={pokemonName} />
      </div>

      <div className="pokemon-stats-container">
        <div className="pokemon-type-container">
          <h2>Type</h2>
          {currentPokemon.type.map((p) => {
            return <div className="pokemon-type">{p}</div>;
          })}
        </div>

        <div className="pokemon-weaknesses-container">
          <h2>Weaknesses</h2>
          {currentPokemon.weaknesses.map((p) => {
            return <div className="pokemon-weaknesses">{p}</div>;
          })}
        </div>
      </div>

      <h2>Evolutions</h2>

      <div className="pokemon-evolutions-container">
        {pokemonPrevEvolutions ? (
          <>
            {pokemonPrevEvolutions.map((prevEvolution) => {
              const prevEvolutionImg =
                pokemon[parseInt(prevEvolution.num) - 1].img;

              return (
                <div className="evolution-button">
                  <Link to={"/" + parseInt(prevEvolution.num, 10)}>
                    <div>{prevEvolution.name}</div>
                    <img src={prevEvolutionImg} alt={prevEvolution.name} />
                  </Link>
                </div>
              );
            })}
          </>
        ) : null}

        {pokemonNextEvolutions ? (
          <>
            {pokemonNextEvolutions.map((nextEvolution) => {
              const nextEvolutionImg =
                pokemon[parseInt(nextEvolution.num) - 1].img;

              return (
                <div className="evolution-button">
                  <Link to={"/" + parseInt(nextEvolution.num, 10)}>
                    <div>{nextEvolution.name}</div>
                    <img src={nextEvolutionImg} alt={nextEvolutionImg.name} />
                  </Link>
                </div>
              );
            })}
          </>
        ) : null}
      </div>
    </div>
  );
}

export default PokemonDetail;
