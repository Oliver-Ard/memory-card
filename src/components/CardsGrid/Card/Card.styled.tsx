import styled from "styled-components";

export const StyledCard = styled.button`
	background: var(--clr-light);
	padding: 1rem;
	border-radius: var(--border-radius);
	box-shadow: var(--box-shadow);

	transition: transform 200ms ease-in-out;

	&:hover {
		transform: scale(1.05);
	}

	p {
		margin-top: 0.5rem;
		font-weight: 600;
	}
`;
