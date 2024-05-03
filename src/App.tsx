import { useState, useEffect } from "react";
import { v4 as uuid } from "uuid";

// Utils
import fetchPokemons from "./utils/fetchPokemons";
import shuffleArray from "./utils/shuffleArray";
import capitalizeFirstLetter from "./utils/capitalizeFirstLetter";
import generatePokemons from "./utils/randomPokemons";

// StyledComponents
import { MainContent } from "./styles/shared/MainContent.styled";

// Components
import Header from "./components/Header/Header";
import CardsGrid from "./components/CardsGrid/CardsGrid";
import Scoreboard from "./components/Scoreboard/Scoreboard";

function App() {
	// Game States
	const [clickedPokemons, setClickedPokemons] = useState<string[]>([]);
	const [currentScore, setCurrentScore] = useState<number>(0);
	const [bestScore, setBestScore] = useState<number>(0);
	const [gameOver, setGameOver] = useState<boolean>(false);
	// Data States
	const [pokemons, setPokemons] = useState<IPokemon[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchData() {
			try {
				const randomPokemons = generatePokemons(12);

				const promises = randomPokemons.map(async (pokemonNumber) => {
					const data = await fetchPokemons(pokemonNumber);
					return {
						id: uuid(),
						name: capitalizeFirstLetter(data.name),
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

	function playGame(pokemonName: string) {
		if (!clickedPokemons.includes(pokemonName)) {
			const newScore = currentScore + 1;
			if (newScore > bestScore) {
				setBestScore(newScore);
			}
			setCurrentScore(newScore);
			setClickedPokemons((prevPokemons) => [...prevPokemons, pokemonName]);
		} else {
			setCurrentScore(0);
			setClickedPokemons([]);
		}
	}

	function focusScoreBoard() {
		const scoreBoardEl: HTMLElement | null =
			document.querySelector("#scoreboard");

		if (scoreBoardEl) {
			scoreBoardEl.focus();
		}
	}

	function handleGame(pokemonName: string) {
		playGame(pokemonName);

		if (clickedPokemons.length === 11) {
			setGameOver(true);
		}

		focusScoreBoard();

		// Shuffle Array
		setPokemons(shuffleArray(pokemons));
	}

	function resetGame() {
		setCurrentScore(0);
		setBestScore(0);
		setClickedPokemons([]);
		setGameOver(false);
	}

	return (
		<>
			<Header />
			<MainContent>
				<Scoreboard score={{ currentScore, bestScore }} />
				<CardsGrid
					data={pokemons}
					error={error}
					loading={loading}
					onClick={handleGame}
				/>
			</MainContent>
		</>
	);
}

export default App;
