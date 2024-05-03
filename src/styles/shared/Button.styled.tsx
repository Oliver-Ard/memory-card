import styled from "styled-components";

interface IButtonProps {
	$bg?: string;
	$color?: string;
}

export const Button = styled.button<IButtonProps>`
	color: ${({ $color }) => $color};
	background: ${({ $bg }) => $bg};
	font-weight: 500;
	padding: 0.5em 1.5em;
	margin-top: 2rem;
	border-radius: var(--border-radius);
	box-shadow: var(--box-shadow);

	transition: transform 200ms ease-in-out, box-shadow 200ms ease-in-out;

	&:hover {
		transform: scale(0.95);
		box-shadow: none;
	}
`;
