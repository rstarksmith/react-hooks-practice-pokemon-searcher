import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([])
  const [search, setSearch] = useState('')
  
  useEffect(() => {
    fetch('http://localhost:3001/pokemon')
    .then(resp => resp.json())
    .then(pokemon => setPokemon(pokemon))
  }, [])

  const addNewPoke = (newPoke) => {
    setPokemon([...pokemon, newPoke])
  }

  const displayPokemon = pokemon.filter((poke) => 
    poke.name.toLowerCase().includes(search)
  )

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addNewPoke={addNewPoke}/>
      <br />
      <Search search={search} onSearchChange={setSearch} />
      <br />
      <PokemonCollection pokemon={displayPokemon} />
    </Container>
  );
}

export default PokemonPage;
