import { StyledCard } from "./Card.styled";

interface ICard {
	name: string;
	image: string;
	onClick: () => void;
}

function Card({ name, image, onClick }: ICard) {
	return (
		<StyledCard type="button" onClick={onClick}>
			<img src={image} alt={name} />
			<p>{name}</p>
		</StyledCard>
	);
}
export default Card;
