import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

async function fetchPokemonImage(url) {
    const response = await fetch(url);

    const data = await response.json();
    const sprites = data.sprites;
    const pokemonImage = sprites.other['official-artwork'].front_default;

    return pokemonImage;
}

const Cards = async ({ pokemons }) => {
    const promises = pokemons.map((pokemon) => {
        const pokemonImage = fetchPokemonImage(pokemon.url);
        return pokemonImage
    })

    const pokemonsImages = await Promise.all(promises)

    return (
        <div className='flex flex-wrap gap-8 justify-between'>
            {pokemons.map((pokemon, index) => {
                return <div className="flex justify-center items-center flex-col px-8 py-4 border-2 border-solid border-red-600 rounded-md shadow-md bg-gray-700 text-white" key={pokemon.id}>
                    <Image src={pokemonsImages[index]} width={250} height={250} alt={pokemon.name} />
                    <p className="mx-4 bg-red-600 rounded px-2 py-1 text-white flex justify-center items-center">#{pokemon.id}</p>
                    <h3 className="capitalize mb-4 text-2xl">{pokemon.name}</h3>
                    <Link href={`/pokemon/${pokemon.id}`} className="no-underline bg-white text-gray-700 px-3 py-4 text-bold rounded transition duration-400 hover:bg-red-600 hover:text-white">
                        Detalhes
                    </Link>
                </div>
            })}
        </div>
    )
}

export default Cards