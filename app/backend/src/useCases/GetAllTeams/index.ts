import TeamRepository from '../../repositories/Teams/TeamRepository';
import GetAllTeamsController from './getAllTeamsController';
import GetAllTeamsUseCase from './getAllTeamsUseCase';

const teamRepository = new TeamRepository();
const getAllTeamsUseCase = new GetAllTeamsUseCase(teamRepository);

const getAllTeamsController = new GetAllTeamsController(getAllTeamsUseCase);

export default getAllTeamsController;
