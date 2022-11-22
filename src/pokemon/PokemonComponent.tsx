import axios from "axios";
import { useEffect, useState } from "react";
import { PokemonResponse, Result } from "./interface/PokemonResponse";
import CardPokemon from "./utils/CardPokemon";
import { MdCatchingPokemon } from "react-icons/md";
import "animate.css";
import NavBar from "./ui/NavBar";
import RoutesApp from "./router/RoutesApp";

export const PokemonComponent = () => {
 

  return (
    <div className="">
      <NavBar />
      <RoutesApp />
    
    </div>
  );
};
