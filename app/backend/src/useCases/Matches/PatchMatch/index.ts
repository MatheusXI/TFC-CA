import MatchesRepository from '../../../repositories/Matches/MatchesRepository';
import PatchMatchController from './patchMatchController';
import PatchMatchUseCase from './patchMatchUseCase';

const matchesRepository = new MatchesRepository();
const patchMatchUseCase = new PatchMatchUseCase(matchesRepository);

const patchMatchController = new PatchMatchController(patchMatchUseCase);

export default patchMatchController;
