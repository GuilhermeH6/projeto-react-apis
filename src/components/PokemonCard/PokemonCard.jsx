import {
  Card,
  PhotoContainer,
  ButtonType,
  DetalhesContainer,
  ButtonDiv,
  CardContainer,
} from "./styles";

import folha from "./img/folha.png";
import Pokebola from "./img/pokebola-bg.png";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ContextPokemon } from "../../ContextPokemon";

export const PokemonCard = () => {
  const navigate = useNavigate();
  const { capturePokemon, pokeInfos, setPokeId, onClickDetails } =
    useContext(ContextPokemon);

  const mappedPokemons = pokeInfos?.map((pokemon) => {
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
          <button onClick={() => capturePokemon(pokemon)}>Capturar!</button>
        </DetalhesContainer>
      </Card>
    );
  });

  return <CardContainer>{mappedPokemons}</CardContainer>;
};
