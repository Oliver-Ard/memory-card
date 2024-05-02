interface ApiResponse {
	name: string;
	sprites: {
		other: {
			"official-artwork": {
				front_default: string;
			};
		};
	};
}

async function fetchPokemons(pokemonName: string) {
	const response = await fetch(
		`https://pokeapi.co/api/v2/pokemon/${pokemonName}`
	);

	if (!response.ok) {
		throw new Error("No pokemons found!");
	}

	const data = (await response.json()) as ApiResponse;

	return data;
}

export default fetchPokemons;
