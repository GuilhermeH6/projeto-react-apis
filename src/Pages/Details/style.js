import styled from "styled-components";

export const Content = styled.div`
  color: white;

  h1 {
    max-width: 200px;
    margin-left: 30px;
    font-size: 40px;
    margin-top: 50px;
    margin-bottom: 50px;

    @media (max-width: 650px) {
      font-size: 20px;
      margin-top: 20px;
      margin-bottom: 20px;
    }
  }

  width: 100%;
  max-width: 1200px;
  margin: auto;
`;

export const ContentArea = styled.div`
  position: relative;
  height: 0px;
  padding: 0px 0px 47.72%;
  margin-left: 20px;
  margin-right: 20px;
`;

export const Card = styled.div`
  position: Absolute;
  top: 0px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background-color: 
  ${(props) => {
    if (props.pokemonTypes) {
    switch ( props.pokemonTypes[0].type.name) {
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
      default:
        return 'grey'
    }
   
    }
    else {
      return 'grey';
    }}} ; 

  margin-bottom: 50px;
  border-radius: 2vw;

  #front {
    background-color: white;
    width: 20%;
    position: absolute;
    bottom: 50%;
    top: 4%;
    left: 2%;
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    border-radius: 8px;

    img {
      width: 100%;
      border-radius: 1vw;

    }
  }

  #back {
    background-color: white;
    width: 20%;
    position: absolute;
    bottom: 4%;
    top: 50%;
    left: 2%;
    margin-top: 15px;
    display: flex;
    align-items: center;
    border-radius: 1vw;

    img {
      width: 100%;
      border-radius: 1vw;
    }
  }

  #stats {
    overflow-y: auto;
    overflow-x: hidden;
    background-color: white;
    width: 25%;
    position: absolute;
    left: 24%;
    top: 4%;
    bottom: 4%;
    border-radius: 1vw;
    color: black;
    font-family: Arial, Helvetica, sans-serif;
    font-size: small;
    color: black;
    text-align: center;
    & h1 {
    text-align: left;
   
    font-family: 'Inter', sans-serif;
    font-weight: 1000;
    font-size: 24px;
      margin-bottom: 20px;
      margin-top: 18px;
      margin-left: 18px;
     color: #000000;
      }
      & table, td, tr {
        
        text-align: center;
        justify-items: auto;
        font-family: 'Poppins', sans-serif;
      
      }
      & table{
        margin: 18px;
        width: 270px;
      }

   
  }

  #title {
    width: 20%;
    position: absolute;
    bottom: 80%;
    top: 4%;
    left: 53%;
    
    color: white;
  }& h1 {
    font-style: normal;
    font-family: "Poppins", sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    margin-top: -20px;

    margin-left: 0px;
    
    text-transform: capitalize;
  }
  & p {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
  }

  #moves {
    overflow: auto;
    background-color: white;
    width: 20%;
    position: absolute;
    bottom: 4%;
    top: 27%;
    left: 52%;
    border-radius: 1.3vw;
    color: black;
    & h1 {
    width: 87px;
    height: 29px;
    font-family: 'Inter', sans-serif;
    font-weight: 1000;
    font-size: 24px;
      margin-bottom: -20px;
      margin-top: 18px;
      margin-left: 18px;
     color: #000000;
      }
  }
  

  #image {
    width: 25%;
    position: absolute;
    bottom: 80%;
    top: -22%;
    left: 74%;
    display: flex;
    align-items: center;

    img {
      width: 100%;
    }
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 150px;
  background-color: white;
  min-width: 350px;

  @media (max-width: 820px) {
    height: 100px;

    img {
      width: 150px;
    }
  }
`;

export const PokedexButton = styled.button`
  border: none;
  border-radius: 8px;
  width: 200px;
  height: 60px;
  color: white;
  background-color: #33a4f5;
  font-size: 20px;
  margin: 20px;

  :hover {
    cursor: pointer;
  }

  @media (max-width: 820px) {
    width: 60px;
    height: 40px;
    font-size: 13px;
  }
`;

export const HomeButton = styled.div`
  margin-left: 15px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 36px;
  text-decoration-line: underline;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  line-height: 20px;
  margin-right: 5px;

  span {
    margin-left: 5px;
  }

  :hover {
    cursor: pointer;
  }

  @media (max-width: 820px) {
    font-size: 12px;
  }
`;

export const TypeItem = styled.li`

padding: 10px;
width: fit-content;
height: 20px;
background: #ECECEC;
border: 1px dashed rgba(0, 0, 0, 0.14);
border-radius: 12px;
margin: 18px;
font-family: 'Poppins', sans-serif;
list-style: none;
font-weight: 400;
font-size: 14px;
color: black;
`

export const Bar = styled.div`

width: 150px;
height: fit-content;
position: relative;
background-color: white;



`

export const Progress = styled.div`

  width: ${props => props.width}%;
  background-color: #FF7C2E;
 align-self: center;
  color: #FF7C2E;
  height: 10px;

  border-radius: 30px;
`
