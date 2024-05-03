import styled from "styled-components";

export const FlexContainer = styled.div<{ theme: ITheme }>`
	display: flex;
	gap: 10rem;

	@media (max-width: ${({ theme }) => theme.mobile}) {
		flex-direction: column;
		gap: 1rem;
	}
`;
