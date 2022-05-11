import MatchesRepository from '../../../repositories/Matches/MatchesRepository';
import GetAllMatchesController from './getAllMatchesController';
import GetAllMatchesUseCase from './getAllMatchesUseCase';

const matchesRepository = new MatchesRepository();

const getAllMatchesUseCase = new GetAllMatchesUseCase(matchesRepository);

const getAllMatchesController = new GetAllMatchesController(getAllMatchesUseCase);

export default getAllMatchesController;
