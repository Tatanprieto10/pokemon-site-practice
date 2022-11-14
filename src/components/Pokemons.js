import React, { useEffect, useState } from "react";
import axios from "axios";

const Pokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    async function loadPokemons() {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon/');
      setPokemons(response.data)
    }
    try {
      loadPokemons();
    } catch(err) {
      console.log(err);
    }
  }, []);

  const pokemon = pokemons.results.map((result) => result.name);
  console.log(pokemon);
  return (
    <>
      <div>
        {pokemons.results.map((result) => (
          <div className={`Pokemon-${result.name}`}>{result.name}</div>
        ))}
      </div>
    </>
  );
};

export default Pokemons;