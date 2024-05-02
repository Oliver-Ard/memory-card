import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

import fetchPokemons from "./utils/fetchPokemons";
import shuffleArray from "./utils/shuffleArray";
import pokemonsName from "./data/pokemonsName";

import Header from "./components/Header/Header";

export interface Pokemon {
	id: string;
	name: string;
	image: string;
}

function App() {
	const [pokemons, setPokemons] = useState<Pokemon[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string>();

	useEffect(() => {
		async function fetchData() {
			try {
				const promises = pokemonsName.map(async (pokemonName) => {
					const data = await fetchPokemons(pokemonName);
					return {
						id: uuid(),
						name: data.name,
						image: data.sprites.other["official-artwork"].front_default,
					};
				});

				const resolvedPokemons = await Promise.all(promises);

				setPokemons(shuffleArray(resolvedPokemons));
			} catch (err) {
				const errorString = err as Error;
				setError(errorString.message);
			} finally {
				setLoading(false);
			}
		}
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		fetchData();
	}, []);

	function handleShuffle() {
		const newArray = [...pokemons];

		setPokemons(shuffleArray(newArray));
	}

	return (
		<>
			<Header />
			<button onClick={handleShuffle} type="button">
				ReShuffle
			</button>
			{loading && <p>Loading....</p>}
			{error && <p>{error}</p>}
			{pokemons.map((pokemon) => (
				<div key={pokemon.id}>
					<p>{pokemon.name}</p>
					<img src={pokemon.image} alt="" />
				</div>
			))}
		</>
	);
}

export default App;
