import { StyledCardsGrid } from "./CardsGrid.styled";

import Card from "./Card/Card";
import { LoadingIcon } from "../../styles/shared/LoadingIcons.styled";
import { ServerError } from "../../styles/shared/Errors.styled";

interface ICardsGrid {
	data: IPokemon[];
	error: string | null;
	loading: boolean;
	onClick: (pokemonName: string) => void;
}

function CardsGrid({ data, error, loading, onClick }: ICardsGrid) {
	return (
		<StyledCardsGrid>
			{loading && <LoadingIcon />}
			{error && <ServerError>{error}</ServerError>}
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
