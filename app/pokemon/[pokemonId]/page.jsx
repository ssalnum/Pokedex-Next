import Image from 'next/image';
import React from 'react'

import styles from './styles/Pokemon.module.css'

async function fetchPokemon(pokemonId) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)

  const result = await response.json();
  return result
}

const PokemonPage = async ({ params: { pokemonId } }) => {
  const pokemon = await fetchPokemon(pokemonId);

  return (
    <main className='h-full text-center flex-1'>
      <h1 className='text-6xl capitalize bg-slate-500 rounded p-3 mx-auto my-3 w-96'>{pokemon.name}</h1>
      <div className='flex justify-center'>
        <div>
          {<Image src={pokemon.sprites.other.home.front_default} width={100} height={100} alt={pokemon.name} className='mx-auto w-auto h-auto' />}
        </div>
        <div className='self-end min-w-32'>
          {<Image src={pokemon.sprites.other.showdown.front_default} width={100} height={100} alt={pokemon.name} className='mx-auto w-auto h-auto' />}
        </div>
      </div>
      <div className='mx-auto my-3 text-xl'>
        <h3 className='text-xl font-semibold mb-4'>Número:</h3>
        <p className='inline border-2 rounded-lg px-3 py-2'>#{pokemon.id}</p>
      </div>
      <div className='uppercase text-sm'>
        <h3 className='text-xl font-semibold mb-3'>Tipo:</h3>
        <div className='mb-3'>
          {pokemon.types.map((item, index) => (
            <span
              key={index}
              className={`${(styles.type)} ${(styles['type_' + item.type.name])}`}
            >
              {item.type.name}
            </span>
          ))}
        </div>
      </div>
      <div className='flex item-center justify-center mt-2'>
        <div className='my-4 px-4 flex items-center justify-center flex-col border-r-2 border-gray-300 border-solid'>
          <h4 className='font-semibold'>Altura:</h4>
          <p>{pokemon.height * 10}</p>
        </div>
        <div className='mx-4 py-4 flex items-center justify-center flex-col'>
          <h4 className='font-semibold'>Peso:</h4>
          <p>{(pokemon.weight / 10)}</p>
        </div>
      </div>
    </main>
  )
}

export default PokemonPage