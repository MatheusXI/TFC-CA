import TeamRepository from '../../../repositories/Teams/TeamRepository';
import CreateAwayLeaderBoardController from './createAwayLeaderBoardController';
import CreateAwayLeaderBoardUseCase from './createAwayLeaderBoardUseCase';

const teamRepository = new TeamRepository();
const createAwayLeaderBoardUseCase = new CreateAwayLeaderBoardUseCase(teamRepository);

const createAwayLeaderBoardController = new CreateAwayLeaderBoardController(
  createAwayLeaderBoardUseCase,
);

export default createAwayLeaderBoardController;
