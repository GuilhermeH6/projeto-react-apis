import {
  Card,
  PhotoContainer,
  ButtonType,
  DetalhesContainer,
  ButtonDiv,
  CardContainer,
} from "../../components/PokemonCard/styles";

import { useNavigate } from "react-router-dom";
import { HeaderContainer, HomeButton, PokedexButton } from "./style";
import PokeLogo from "../../img/logo.png";
import { goToHome } from "../../Routes/coordinator";
import { IoIosArrowBack } from "react-icons/io";
import React, { useContext } from "react";
import { ContextPokemon } from "../../ContextPokemon";
import Pokebola from "../../components/PokemonCard/img/pokebola-bg.png";

function Pokedex() {
  const navigate = useNavigate();
  const { pokedex, onClickDetails, removePokemon } = useContext(ContextPokemon);

  const mappedPokemons = pokedex?.map((pokemon) => {
    return (
      <Card pokemonTypes={pokemon.types} key={pokemon.id}>
        <p>#0{pokemon.id}</p>
        <h1>{pokemon.name}</h1>

        <PhotoContainer>
          <img className="pokebola" src={Pokebola} />
          <img
            className="pokeimage"
            src={
              pokemon[`sprites`][`other`][`official-artwork`][`front_default`]
            }
            alt={pokemon.name}
          />
        </PhotoContainer>
        <ButtonDiv>
          {pokemon.types &&
            pokemon.types.map((type) => {
              return (
                <ButtonType pokemonTypes={type.type.name}>
                  <p>{type.type.name}</p>
                </ButtonType>
              );
            })}
        </ButtonDiv>
        <DetalhesContainer>
          <p onClick={() => onClickDetails(pokemon.id, navigate)}>Detalhes</p>
          <button onClick={() => removePokemon(pokemon)}>Remover!</button>
        </DetalhesContainer>
      </Card>
    );
  });
  return (
    <div>
      <HeaderContainer>
        <HomeButton onClick={() => goToHome(navigate)}>
          <IoIosArrowBack /> <span>Todos Pokémons</span>
        </HomeButton>
        <img src={PokeLogo}></img>
        <PokedexButton>Pokédex</PokedexButton>
      </HeaderContainer>
      <CardContainer>{mappedPokemons}</CardContainer>
    </div>
  );
}

export default Pokedex;
