import TeamRepository from '../../../repositories/Teams/TeamRepository';
import CreateLeaderBoardController from './createLeaderBoardController';
import CreateLeaderBoardUseCase from './createLeaderBordUseCase';

const teamRepository = new TeamRepository();
const createLeaderBoardUseCase = new CreateLeaderBoardUseCase(teamRepository);

const createLeaderBoardController = new CreateLeaderBoardController(
  createLeaderBoardUseCase,
);

export default createLeaderBoardController;
