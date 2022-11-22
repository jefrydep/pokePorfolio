import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import useForm from "../hooks/UserForm";

const SearchPage = () => {
  const [pokemonData, setPokemonData] = useState();
  const navigate = useNavigate();
  const location = useLocation();

  const { pokemonName, handleChange } = useForm({

    pokemonName: "",
  });

  const getPokemonByName = async (name: any) => {
    // const URL = `https://pokeapi.co/api/v2/pokemon/ditto`;
    const URL = `https://pokeapi.co/api/v2/pokemon/${name}`;
    await axios
      .get(URL)
      .then((resp) => setPokemonData(resp.data))
      .catch((err) => console.log(err));
  };
  const { q = "" } = queryString.parse(location.search);
  console.log(q);
  useEffect(() => {
    getPokemonByName(q);
  }, []);

  const onSearchSubmit = (event: any) => {
    event.prevetDefault();
    if (pokemonName.trim().length <= 1) return;
    navigate(`?q=${pokemonName}`);
  };

  console.log(pokemonData);

  return (
    <div className="bg-cyan-900 h-screen">
      <div className="pt-5 m-auto w-[600px]">
        <h2 className="text-center text-white text-3xl font-bold m-5">
          Search your Pokemon
        </h2>
        <form action="" onSubmit={onSearchSubmit}>
          <label className="text-white font-bold mx-6" htmlFor="">
            search Your Pokemon :
          </label>
          <input
            value={pokemonName}
            name="pokemonName"
            onChange={handleChange}
            className="w-80 px-5 py-1 mb-9 rounded-md"
            type="text"
            placeholder="What Pokemon are you looking for?"
          />
        </form>
        <hr className="mb-8" />
      </div>
      <section className="max-w-6xl m-auto">pokemon results</section>
    </div>
  );
};

export default SearchPage;
