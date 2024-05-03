function generatePokemons(amount: number): number[] {
	const pokemonsSet = new Set<number>();

	while (pokemonsSet.size < amount) {
		const randomNumber = Math.floor(Math.random() * 200) + 1;
		pokemonsSet.add(randomNumber);
	}

	return Array.from(pokemonsSet);
}

export default generatePokemons;
