import styled from "styled-components";
import { ModalBox } from "../../styles/shared/ModalBox.styled";
import { Button } from "../../styles/shared/Button.styled";

const GameOverModal = styled(ModalBox)<{ theme: ITheme }>`
	line-height: 1.2;

	p {
		font-size: var(--font-size-600);
		font-weight: 600;

		&:nth-of-type(1) {
			margin-bottom: 1rem;
		}
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		p {
			font-size: var(--font-size-500);
		}
	}
`;

function GameOver({ onRestart }: { onRestart: () => void }) {
	return (
		<GameOverModal $width="30rem">
			<div className="content">
				<p>Congratulation!</p>
				<p>You caught all the pokemons!</p>
				<Button
					$bg="var(--clr-blue)"
					$color="var(--clr-light)"
					onClick={onRestart}
					type="button">
					Restart Game
				</Button>
			</div>
		</GameOverModal>
	);
}
export default GameOver;
