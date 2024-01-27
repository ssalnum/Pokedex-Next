import Cards from "./components/Cards";

async function fetchPokemons() {
  const maxPokemons = 251;
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${maxPokemons}`);

  const data = await response.json();

  data.results.forEach((pokemon, index) => {
    pokemon.id = index + 1;
  });

  return data.results;
}

export default async function Home() {
  const pokemons = await fetchPokemons();

  return (
    <main className="flex min-h-screen flex-col items-center p-10">
      <div>
        <h1 className="text-4xl mb-6 text-red-600 text-center">
          Poke<span className="text-white">Next</span>
        </h1>
        <Cards pokemons={pokemons} />
      </div>
    </main>
  );
}
