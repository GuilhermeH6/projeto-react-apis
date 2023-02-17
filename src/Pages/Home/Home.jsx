import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { PokemonCard } from "../../components/PokemonCard/PokemonCard";
import {
  Container,
  PokemonListContainer,
  HeaderContainer,
  PokedexButton,
  HomeButton,
} from "./style";
import PokeLogo from "../../img/logo.png";
import { goToPokedex } from "../../Routes/coordinator";
import { IoIosArrowBack } from "react-icons/io";
import { ContextPokemon } from "../../ContextPokemon";

function Home() {
  const navigate = useNavigate();
  const pokeInfos = useContext(ContextPokemon);

  return (
    <Container>
      <HeaderContainer>
        <HomeButton>
          <IoIosArrowBack /> <span>Todos Pokémons</span>
        </HomeButton>
        <img src={PokeLogo}></img>
        <PokedexButton onClick={() => goToPokedex(navigate)}>
          Pokédex
        </PokedexButton>
      </HeaderContainer>
      <PokemonListContainer>
        <PokemonCard pokeInfos={pokeInfos}></PokemonCard>
      </PokemonListContainer>
    </Container>
  );
}

export default Home;
