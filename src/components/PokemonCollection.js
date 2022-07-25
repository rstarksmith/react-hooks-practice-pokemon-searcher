import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {

  const renderPokemon = pokemon.map(poke => <PokemonCard key={poke.id} poke={poke} />) 

  return (
    <Card.Group itemsPerRow={6}>
      {renderPokemon}
    </Card.Group>
  );
}

export default PokemonCollection;
