import styled from "styled-components";

export const StyledCardsGrid = styled.section<{ theme: ITheme }>`
	padding-bottom: 4rem;
	width: min(90%, 50rem);

	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
	justify-items: center;

	gap: 2rem;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		grid-template-columns: repeat(auto-fit, minmax(7rem, 1fr));
	}
`;
