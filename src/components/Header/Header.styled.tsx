import styled from "styled-components";
import { ITheme } from "../../types/Theme.types";

export const StyledHeader = styled.header<{ theme: ITheme }>`
	background: var(--clr-primary);
	padding: 2rem 2rem 5rem;
	border-bottom: 1rem solid var(--clr-dark);

	display: flex;
	justify-content: center;
	position: relative;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		padding: 2rem 2rem 3rem;
	}
`;

export const Logo = styled.img`
	width: 30rem;
`;

export const PokeballIcon = styled.img<{ theme: ITheme }>`
	width: 5rem;
	box-shadow: var(--shadow-border);
	border-radius: var(--border-radius-2);

	position: absolute;
	bottom: -3rem;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		width: 3.5rem;
		box-shadow: var(--shadow-border-2);

		bottom: -2.2rem;
	}
`;
