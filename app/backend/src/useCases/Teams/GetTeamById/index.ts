import TeamRepository from '../../../repositories/Teams/TeamRepository';
import GetTeamByIdController from './getTeamByIdController';
import GetTeamByIdUseCase from './getTeamByIdUseCase';

const teamRepository = new TeamRepository();
const getTeamByIdUseCase = new GetTeamByIdUseCase(teamRepository);

const getTeamByIdController = new GetTeamByIdController(getTeamByIdUseCase);

export default getTeamByIdController;
