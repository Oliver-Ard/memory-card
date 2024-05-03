import { FlexContainer } from "../../styles/shared/Containers.styled";

import { ScoreMessage } from "./ScoreBoardMessages.styled";

interface IScoreboard {
	score: {
		currentScore: number;
		bestScore: number;
	};
}

function Scoreboard({ score }: IScoreboard) {
	return (
		<FlexContainer id="scoreboard">
			<ScoreMessage $bg="red">Current Score: {score.currentScore}</ScoreMessage>
			<ScoreMessage $bg="blue">Best Score: {score.bestScore}</ScoreMessage>
		</FlexContainer>
	);
}
export default Scoreboard;
