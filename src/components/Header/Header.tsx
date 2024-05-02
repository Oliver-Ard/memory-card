import { StyledHeader, Logo, PokeballIcon } from "./Header.styled";
import pokemonLogo from "../../assets/pokemon-logo.png";
import pokeballIcon from "../../assets/pokeball-icon.png";

function Header() {
	return (
		<StyledHeader>
			<Logo src={pokemonLogo} alt="Pokemon Logo" />
			<PokeballIcon src={pokeballIcon} alt="" />
		</StyledHeader>
	);
}
export default Header;
