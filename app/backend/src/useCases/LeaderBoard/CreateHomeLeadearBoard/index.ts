import TeamRepository from '../../../repositories/Teams/TeamRepository';
import CreateHomeLeaderBoardController from './createHomeLeaderBoardController';
import CreateHomeLeaderBoardUseCase from './createHomeLeaderBoardUseCase';

const teamRepository = new TeamRepository();
const createHomeLeaderBoardUseCase = new CreateHomeLeaderBoardUseCase(teamRepository);

const createHomeLeaderBoardController = new CreateHomeLeaderBoardController(
  createHomeLeaderBoardUseCase,
);

export default createHomeLeaderBoardController;
