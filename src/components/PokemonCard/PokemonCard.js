import React from "react";
import { Link } from "react-router-dom";

import "./PokemonCard.css";

function PokemonCard({ pokemon }) {
  return pokemon.map((p) => {
    return (
      <>
        <div className="card-container">
          <Link to={"/" + p.id}>
            <img src={p.img} alt={p.name} />
            <h3>{p.name}</h3>
          </Link>
        </div>
      </>
    );
  });
}

export default PokemonCard;
