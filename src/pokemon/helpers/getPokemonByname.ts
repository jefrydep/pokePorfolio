import axios from "axios";
import { useEffect, useState } from "react";
import { PokemonsResult } from "../interface/PokemonResult";

export const getPokemonByName = async(name: string) => {
  const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;
  const pokemon = await axios
    .get(URL)
    .then((resp) => resp.data)
    .catch((err) => console.log(err));

  return pokemon;
};
//   const namePok = pokDetail?.name;
//   const imgPokemons = pokDetail?.sprites.other?.dream_world.front_default;
//   const typePokemon = pokDetail?.types[0].type.name;
//   const heighPokemon = pokDetail?.height;
//   const experiencePokemon = pokDetail?.base_experience;
//   const weightPokemon = pokDetail?.weight;
