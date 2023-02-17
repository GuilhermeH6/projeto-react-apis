import styled from "styled-components";

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
  background-color: white;
  font-size: 20px;
  margin: 20px;

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
