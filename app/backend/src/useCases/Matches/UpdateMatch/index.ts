import MatchesRepository from '../../../repositories/Matches/MatchesRepository';
import UpdateMatchController from './updateMatchController';
import UpdateMatchUseCase from './updateMatchUseCase';

const matchRepository = new MatchesRepository();
const updateMatchUseCase = new UpdateMatchUseCase(matchRepository);

const updateMatchController = new UpdateMatchController(updateMatchUseCase);

export default updateMatchController;
