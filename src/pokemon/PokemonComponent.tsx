import axios from "axios"
import { useEffect, useState } from "react"
import { PokemonResponse, Result } from "./interface/PokemonResponse"
import CardPokemon from "./utils/CardPokemon"

export const PokemonComponent = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        getpokemons();
    }, [])
    const getpokemons = () => {
        const URL = `https://pokeapi.co/api/v2/pokemon?limit=30&offset=0`

        axios.get(URL)
            .then((resp) => setPokemons(resp.data.results))
            .catch((err) => console.log(err));


    }
    console.log(pokemons)


    return (
        <div className="bg-orange-600">
            <div className="w-auto text-center mb-10">

                <h1 className="text-white font-bold text-8xl  ">Pokedex </h1>
                <h1 className="text-white font-bold text-2xl  ">Busca tu pokemon </h1>
                

            </div>

    <div className="text-center bg-slate-100 ">
        <label className="mr-8 ">Buscar Pokemon</label>
        <input className="px-5 invalid:text-pink-600 " type="text" placeholder="What pokemon are you looking for" />
    </div>

<div className="cursor-pointer grid grid-rows-4 grid-flow-col gap-4      " >
    
{pokemons.map((item: Result) => (
                <div className="w-80 mt-12 bg-indigo-700 rounded-3xl">

                    <CardPokemon key={item.url}{...item} />
                </div>
            ))}
</div>

        </div>




    )
}
