import TeamRepository from '../../../repositories/Teams/TeamRepository';
import GetTeamsAndMatchesController from './getTeamAndMatchesController';
import GetTeamAndMatchesUseCase from './getTeamAndMatchesUseCase';

const teamRepository = new TeamRepository();
const getAllTeamsUseCase = new GetTeamAndMatchesUseCase(teamRepository);

const getTeamAndMatchesController = new GetTeamsAndMatchesController(getAllTeamsUseCase);

export default getTeamAndMatchesController;
