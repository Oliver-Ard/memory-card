import styled from "styled-components";

export const StyledCardsGrid = styled.section<{ theme: ITheme }>`
	width: min(90%, 60rem);

	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(12rem, 1fr));
	justify-items: center;
	gap: 2rem;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
	}
`;
