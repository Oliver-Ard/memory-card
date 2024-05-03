import { StyledCardsGrid } from "./CardsGrid.styled";

import Card from "./Card/Card";

interface ICardsGrid {
	data: IPokemon[];
	error: string | null;
	loading: boolean;
	onClick: () => void;
}

function CardsGrid({ data, error, loading, onClick }: ICardsGrid) {
	return (
		<StyledCardsGrid>
			{loading && <p>Loading....</p>}
			{error && <p>{error}</p>}
			{data.map((pokemon) => (
				<Card
					key={pokemon.id}
					name={pokemon.name}
					image={pokemon.image}
					onClick={onClick}
				/>
			))}
		</StyledCardsGrid>
	);
}
export default CardsGrid;
