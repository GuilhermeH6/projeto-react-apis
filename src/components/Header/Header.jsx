import React, { useState } from "react";
import PokeLogo from "../../img/logo.png";
import { HeaderContainer } from "./style";
import { Button } from "./style";
import { useNavigate } from "react-router-dom";
import { goToPokedex } from "../../routes/Coordinator";

export default function Header(props) {
  const [currentscreen, setCurrentScreen] = useState("");

  const onClickPokedex = (navigate) => {
    navigate("/pokedex");
    setCurrentScreen("pokedex");
  };

  const onClickHome = (navigate) => {
    navigate("/");
    setCurrentScreen("home");
  };

  console.log(window.location.pathname);

  return (
    <HeaderContainer CurrentScreen={currentscreen}>
      <Button id="home" onClick={() => onClickHome(props.navigate)}>
        Home
      </Button>
      <img src={PokeLogo}></img>
      <Button id="pokedex" onClick={() => onClickPokedex(props.navigate)}>
        Pokédex
      </Button>
    </HeaderContainer>
  );
}
