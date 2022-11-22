import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdCallMissedOutgoing } from "react-icons/md";
import { useParams } from "react-router-dom";
import { PokemonsResult } from "../interface/PokemonResult";

const PokemonPage = () => {
  const [pokDetail, setPokDetail] = useState<PokemonsResult>();

  const { id } = useParams();

  console.log(id);
  const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;

  const getPokemonByName = async () => {
    const URL = `https://pokeapi.co/api/v2/pokemon/${id}`;
    // const resp = await axios.get(URL);
    // console.log(resp.data)

    await axios
      .get(URL)
      .then((resp) => setPokDetail(resp.data))
      .catch((err) => console.log(err));
  };
  const namePok = pokDetail?.name;
  const imgPokemons = pokDetail?.sprites.other?.dream_world.front_default;
  const typePokemon = pokDetail?.types[0].type.name;
  const heighPokemon = pokDetail?.height;
  const experiencePokemon = pokDetail?.base_experience;
  const weightPokemon = pokDetail?.weight;

  useEffect(() => {
    getPokemonByName();
  }, []);

  return (
    <>
    <div className="h-screen bg-cyan-900">
      <div className="w-[600px] m-auto">
        <h2 className="mb-8 text-center text-2xl text-white font-bold mt-10 ">
          {namePok}
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
            Experience:
            <span className="mx-12 bg-teal-400 text-white px-3 py-1 rounded-full">
              {experiencePokemon}
            </span>
          </h3>
          <h3 className="mb-5 text-center text-green-500 font-bold ">
            Weight
            <span className="mx-12 bg-teal-400 text-white px-3 py-1 rounded-full">
              {" "}
              {weightPokemon}
            </span>
          </h3>
        </div>

        <div className="bg-slate-200 pt-12 rounded-t-3xl">
          <img
            className=" h-96     mx-7 animate__animated animate__tada "
            src={imgPokemons}
            alt=""
            />
          <h3 className="mt-6 pb-8 text-center text-green-500 font-bold text-2xl ">
            type
            <span className="mx-12 bg-teal-400 text-white px-6 py-2 rounded-full">
              {typePokemon}
            </span>
          </h3>
        </div>
      </div>
    </div>
            </>
  );
};

export default PokemonPage;
