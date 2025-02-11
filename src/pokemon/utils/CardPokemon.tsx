import React, { useEffect, useState } from "react";
import { Result } from "../interface/PokemonResponse";
import axios from "axios";
import { PokemonsResult } from "../interface/PokemonResult";
import { Link } from "react-router-dom";
const CardPokemon = ({ url, name }: Result) => {
  const [newPokemons, setNewPokemons] = useState<PokemonsResult>();

  const getNewPokemons = async () => {
    await axios.get(url).then((resp) => setNewPokemons(resp.data));
  };
  useEffect(() => {
    getNewPokemons();
  }, []);
  const imgPokemons = newPokemons?.sprites.other?.dream_world.front_default;
  const typePokemon = newPokemons?.types[0].type.name;
  const heighPokemon = newPokemons?.height;
  const experiencePokemon = newPokemons?.base_experience;
  const weightPokemon = newPokemons?.weight;

  // console.log(newPokemons)

  return (
    <Link to={`pokemon/${name}`}>
      <div>
        <h2 className="mb-8 text-center text-2xl text-white font-bold mt-10 ">
          {name}
        </h2>
        <div className=" marker: ">
          <h3 className="mb-5 text-center text-green-500 font-bold ">
            Height:{" "}
            <span className="mx-12 bg-orange-600 text-white px-3 py-1 rounded-full">
              {" "}
              {heighPokemon}
            </span>
          </h3>
          <h3 className="mb-5 text-center text-green-500 font-bold ">
            Experience:{" "}
            <span className="mx-12 bg-teal-400 text-white px-3 py-1 rounded-full">
              {" "}
              {experiencePokemon}
            </span>
          </h3>
          <h3 className="mb-5 text-center text-green-500 font-bold ">
            Weight:{" "}
            <span className="mx-12 bg-teal-400 text-white px-3 py-1 rounded-full">
              {" "}
              {weightPokemon}
            </span>
          </h3>
        </div>

        <div className="bg-slate-200 rounded-t-3xl">
          <img
            className="w-48 h-52 m-7 animate__animated animate__tada "
            src={imgPokemons}
            alt=""
          />
          <h3 className="mt-6 pb-8 text-center text-green-500 font-bold ">
            Pokemon type:{" "}
            <span className="mx-12 bg-teal-400 text-white px-3 py-1 rounded-full">
              {" "}
              {typePokemon}
            </span>
          </h3>
        </div>
      </div>
    </Link>
  );
};

export default CardPokemon;
