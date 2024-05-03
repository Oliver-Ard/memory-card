import styled from "styled-components";

export const ModalBox = styled.div<{ $width?: string }>`
	&::before {
		content: "";
		background: var(--clr-overlay);
		width: 100vw;
		height: 100vh;

		position: fixed;
		top: 0px;
		left: 0px;
		z-index: 1;
	}

	.content {
		background: var(--clr-overlay-secondary);
		text-align: center;
		width: min(80%, ${({ $width }) => $width});
		padding: 2rem;
		border: none;
		border-radius: var(--border-radius);
		box-shadow: var(--box-shadow);

		position: absolute;
		top: 50%;
		left: 50%;
		z-index: 2;
		transform: translate(-50%, -50%) scale(1);
	}
`;
