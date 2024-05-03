import styled from "styled-components";

export const ScoreMessage = styled.p<{ $bg?: string }>`
	background: ${({ $bg }) =>
		$bg === "red" ? "var(--clr-primary)" : "var(--clr-blue)"};
	color: var(--clr-light);
	text-align: center;
	font-weight: 600;
	padding: 0.5rem 0;
	width: 13rem;

	border-radius: var(--border-radius);

	box-shadow: var(--box-shadow);
`;
