import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Details from "../Pages/Details/Details";
import Pokedex from "../Pages/Pokedex/Pokedex";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/details" element={<Details />} />
        <Route path="/pokedex" element={<Pokedex />} />
      </Routes>
    </BrowserRouter>
  );
};
