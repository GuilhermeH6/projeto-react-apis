import React, { useEffect, useState } from "react";
import axios from "axios";
import { Router } from "./Routes/Router";
import { GlobalStyle } from "./Global";
import { ContextPokemon } from "./ContextPokemon";
import { goToDetails } from "./Routes/coordinator";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [pokeInfos, setPokeInfos] = useState([]);
  const [pokeId, setPokeId] = useState();
  const [pokedex, setPokedex] = useState([]);

  const getAllPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
      .then((response) => {
        setPokemons(response.data.results);
        // alert('SUCESSO')
      })
      .catch((error) => {
        console.log(error);
        alert("erro");
      });
  };

  useEffect(() => {
    getAllPokemons();
  }, []);

  useEffect(() => {
    const data = [];
    pokemons.forEach((pokemon) => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`)
        .then((response) => {
          data.push(response.data);
          if (data.length === 150) {
            const sortPokemons = data.sort((a, b) => {
              return a.id - b.id;
            });
            setPokeInfos(sortPokemons);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, [pokemons]);

  const capturePokemon = (filterPokemon) => {
    setPokeInfos(
      pokeInfos.filter((pokemon) => pokemon.name !== filterPokemon.name)
    );
    setPokedex([...pokedex, filterPokemon]);
  };
  console.log("pokedex", pokedex);

  const removePokemon = (filterPokemon) => {
    setPokedex(
      pokedex.filter((pokemon) => pokemon.name !== filterPokemon.name)
    );
    setPokeInfos([...pokeInfos, filterPokemon]);
  };

  const onClickDetails = (id, navigate) => {
    setPokeId(id);
    goToDetails(navigate);
  };

  useEffect(() => {
    pokeInfos.sort((a, b) => {
      return a.id - b.id;
    });
  }, [pokeInfos]);

  return (
    <ContextPokemon.Provider
      value={{
        removePokemon,
        onClickDetails,
        pokedex,
        capturePokemon,
        pokeInfos,
        pokeId,
        setPokeId,
      }}
    >
      <Router />
      <GlobalStyle />
    </ContextPokemon.Provider>
  );
}

export default App;
