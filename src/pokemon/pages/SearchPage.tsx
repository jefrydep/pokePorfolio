import axios from "axios";
import { ChangeEvent, useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";

import useForm from "../hooks/UserForm";
import { Result } from "../interface/PokemonResponse";
import CardPokemon from "../utils/CardPokemon";

const SearchPage = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const { pokemonName, handleChange } = useForm({
    pokemonName: "",
  });

  const getPokemons = async () => {
    // const URL = `https://pokeapi.co/api/v2/pokemon/ditto`;
    const URL = `https://pokeapi.co/api/v2/pokemon?limit=100&offset=0`;
    await axios
      .get(URL)
      .then((resp) => setPokemonData(resp.data.results))
      .catch((err) => console.log(err));
  };

  const getPokemonByName = (nameP :any) => {
    const name = nameP.toLowerCase().trim();
    if (name.length === 0) return [];
    const pokemon = pokemonData?.filter((pokemon: any) =>
      pokemon.name.toLowerCase().includes(nameP)
    );

    return pokemon;
  };
  
  const { q='' } = queryString.parse(location.search);
  // console.log({ q });


  const newPokemon = getPokemonByName(q);
  // console.log(newPokemon)

  useEffect(() => {
    getPokemons();
  }, []);

  const onSearchSubmit = (event: any) => {
    event.preventDefault();
    if (pokemonName.trim().length <= 1) return;
    navigate(`?q=${pokemonName}`);
    // console.log({ pokemonName });
  };
  console.log(pokemonData);

  return (
    <div className="bg-cyan-900 pb-52 ">
      <div className="pt-5 m-auto w-[600px]">
        <h2 className="text-center text-white text-3xl font-bold m-5">
          Search your Pokemon
        </h2>
        <form action="" onSubmit={onSearchSubmit}>
          <label className="text-white font-bold mx-6" htmlFor="">
            search Your Pokemon :
          </label>
          <input
            autoComplete="off"
            value={pokemonName}
            name="pokemonName"
            onChange={handleChange}
            className="w-80 px-5 py-1 mb-9 rounded-md"
            type="text"
            placeholder="What Pokemon are you looking for?"
          />
        </form>
        <hr className="mb-8" />
        <div>
          {
         (q == '')?<p>buscar heroe</p>:'nel'
          }
          {/* <p >no se econtradon resultado con {q}</p> */}
        </div>
     


      </div>
      <div className="max-w-6xl m-auto flex flex-wrap">
      {newPokemon.map((item: Result) => (
            <div className="  w-80 mx-5 mt-10 bg-indigo-700 rounded-3xl">
            <CardPokemon key={item.name} {...item} />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default SearchPage;
