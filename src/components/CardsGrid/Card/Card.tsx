import { StyledCard } from "./Card.styled";

interface ICard {
	name: string;
	image: string;
	onClick: (pokemonName: string) => void;
}

function Card({ name, image, onClick }: ICard) {
	return (
		<StyledCard type="button" onClick={() => onClick(name)}>
			<img src={image} alt={name} />
			<p>{name}</p>
		</StyledCard>
	);
}
export default Card;
