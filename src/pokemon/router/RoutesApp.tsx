import { Routes, Route, Navigate } from "react-router-dom";
import FavoritePage from "../pages/FavoritePage";
import HomePage from "../pages/HomePage";
import PokemonPage from "../pages/PokemonPage";
import SearchPage from "../pages/SearchPage";
import { PokemonComponent } from "../PokemonComponent";

const RoutesApp = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="search" element={<SearchPage />} />
      <Route path="favorites" element={<FavoritePage />} />
      <Route path="pokemon/:id" element={<PokemonPage />} />
      <Route path="/*" element={<Navigate to='/'/>} />
      
    </Routes>
  );
};

export default RoutesApp;
