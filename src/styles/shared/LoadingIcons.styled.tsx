import styled from "styled-components";
import { TiArrowSync } from "react-icons/ti";

import { rotate } from "../global/Animations.styled";

export const LoadingIcon = styled(TiArrowSync)`
	font-size: 8rem;
	color: var(--clr-dark);
	margin-top: 10rem;

	animation: ${rotate} 1000ms linear infinite;
`;
