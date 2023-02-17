import styled from "styled-components";
import background from "./img/pokebola-bg.png";

export const Card = styled.div`
  color: white;
  width: 420px;
  height: 180px;
  border-radius: 12px;
  padding: 20px;
  text-transform: capitalize;
  font-weight: 100;
  font-family: "Inter", sans-serif;
  background-color: ${(props) => {
    switch (props.pokemonTypes[0].type.name) {
      case "grass":
        return "#729F92;";
      case "water":
        return "#71c3ff;";
      case "poison":
        return "#AD61AE;";
      case "bug":
        return "#76A866;";
      case "normal":
        return "#BF9762;";
      case "fire":
        return "#EAAB7D;";
      case "electric":
        return "#cccc00";
      case "fairy":
        return "#ffcbdb";
      case "fighting":
        return "#cd5c5c";
      case "psychic":
        return "#ffe4e1";
      case "ghost":
        return "#7a297a";
      case "ground":
        return "#874b0f";
      case "rock":
        return "#874b0f";
      case "ice":
        return "#00ced1";
      case "dragon":
        return "#cc8400";
    }
  }};

  & h1 {
    font-style: normal;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    margin-top: -20px;
    text-transform: capitalize;

    @media (max-width: 500px) {
      font-size: 26px;
    }
  }
  & p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }

  @media (max-width: 500px) {
    width: 300px;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  gap: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  margin-bottom: 60px;
`;

export const PhotoContainer = styled.div`
  margin-left: 250px;
  margin-top: -155px;
  width: 193px;
  height: 193px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  .pokeimage {
    max-width: 193px;
    z-index: 1;
  }
  .pokebola {
    position: absolute;
    top: 45px;
    right: 5px;
  }

  @media (max-width: 500px) {
    width: 80px;

    .pokeimage {
      width: 153px;
      margin-right: 80px;
    }

    .pokebola {
      width: 180px;
      top: 50px;
      right: 10px;
    }
  }
`;

export const ButtonType = styled.div`
  padding: 5px 8px;
  margin-right: 8px;
  margin-top: 5px;
  display: flex;
  align-items: center;
  width: 100px;
  height: 30px;
  border: 1px dashed rgba(255, 255, 255, 0.47);
  border-radius: 8px;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
  z-index: 5;
  background-color: ${(props) => {
    switch (props.pokemonTypes) {
      case "grass":
        return "#70B873;";
      case "water":
        return "#33A4F5;";
      case "poison":
        return "#AD61AE;";
      case "bug":
        return "#316520;";
      case "normal":
        return "#8A8A8A;";
      case "fire":
        return "#F44900;";
      case "flying":
        return "#6892B0";
      case "electric":
        return "#cccc00";
      case "fairy":
        return "#ffcbdb";
      case "fighting":
        return "#cd5c5c";
      case "psychic":
        return "#ffe4e1";
      case "ghost":
        return "#7a297a";
      case "ground":
        return "#874b0f";
      case "rock":
        return "#874b0f";
      case "ice":
        return "#00ced1";
      case "dragon":
        return "#cc8400";
    }
  }};
  & img {
    width: 17px;
    height: 19px;
  }

  p {
    margin-left: 17px;
  }
`;

export const ButtonDiv = styled.div`
  display: flex;
  width: 200px;
  margin-top: -60px;
`;

export const DetalhesContainer = styled.div`
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  align-items: center;
  padding: 0px;

  & p {
    width: 74px;
    height: 24px;

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;


    text-decoration-line: underline;

    color: #ffffff;

    :hover {
      cursor: pointer;
    }
  }
  & button {

    align-items: center;
    padding: 4px 10px;
    cursor: pointer;
    z-index: 1;

    width: 146px;
    height: 38px;
    color: black;
    font-size: 20px;
    border-style: none;
    background: #ff4040;
    border-radius: 8px;
  }
`;
