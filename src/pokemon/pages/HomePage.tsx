import axios from "axios";
import React, { useEffect, useState } from "react";
import { Result } from "../interface/PokemonResponse";
import CardPokemon from "../utils/CardPokemon";

const HomePage = () => {
  const [pokemons, setPokemons] = useState([]);
  const getpokemons = () => {
    const URL = `https://pokeapi.co/api/v2/pokemon?limit=30&offset=0`;

    axios
      .get(URL)
      .then((resp) => setPokemons(resp.data.results))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getpokemons();
  }, []);
  // console.log(pokemons);
  return (
    <div className="bg-cyan-900">

    
      <div className="w-auto text-center mb-10">
        <h1 className="text-white font-bold text-8xl  ">
          P<span className="text-orange-600">o</span>kedex{" "}
        </h1>
        <h2 className="text-white font-bold text-2xl  ">
          what pokemon do <span className="text-orange-600"></span> you love{" "}
        </h2>
        <h2 className="text-white font-bold text-9xl  "> </h2>
      </div>

      {/* <div className="text-center  ">
        <label className="mr-8 text-white font-bold ">  Search Pokemon    :</label>
        <input className="h-9 px-5 w-96  border-none outline-none  border-y-cyan-400 " type="text" placeholder=" What pokemon are you looking for?" />
    </div> */}

      <div className="cursor-pointer flex flex-wrap max-w-6xl m-auto">
        {pokemons.map((item: Result) => (
            <div className="  w-80 mx-5 mt-10 bg-indigo-700 rounded-3xl">
            <CardPokemon key={item.name} {...item} />
          </div>
        ))}
      </div>
        </div>
    
  );
};

export default HomePage;
