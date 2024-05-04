import styled from "styled-components";
import { Button } from "../../styles/shared/Button.styled";
import { ModalBox } from "../../styles/shared/ModalBox.styled";

interface IntroModalProps {
	onClick: (arg0: boolean) => void;
}

const StyledIntroModal = styled(ModalBox)<{ theme: ITheme }>`
	.content {
		text-align: left;

		h1 {
			text-align: center;
			margin-bottom: 2rem;
		}

		p:nth-of-type(1) {
			text-decoration: underline;
			font-weight: 500;
			margin-bottom: 1rem;
		}

		ul {
			margin-left: 1.5rem;

			li {
				padding-left: 0.5rem;
			}

			li::marker {
				content: "🎯";
			}

			li:not(:last-child) {
				margin-bottom: 0.5rem;
			}
		}
	}

	@media (max-width: ${({ theme }) => theme.mobile}) {
		font-size: var(--font-size-400);

		h1 {
			font-size: var(--font-size-700);
		}
	}
`;

function IntroModal({ onClick }: IntroModalProps) {
	return (
		<StyledIntroModal $width="50rem">
			<div className="content">
				<h1>PokeMemory Guide</h1>
				<p>Objectives of the game:</p>
				<ul>
					<li>get points by clicking on a pokemon;</li>
					<li>when you click on the same pokemon the score will reset;</li>
					<li>
						win the game by clicking on all the pokemons without clicking twice
						on the same pokemon;
					</li>
				</ul>
				<Button
					$bg="var(--clr-blue)"
					$color="var(--clr-light)"
					onClick={() => onClick(false)}
					type="button">
					Close
				</Button>
			</div>
		</StyledIntroModal>
	);
}
export default IntroModal;
