import MatchesRepository from '../../../repositories/Matches/MatchesRepository';
import PatchFinishMatchController from './patchFinishMatchController';
import PatchFinishMatchUseCase from './patchFinishMatchUseCase';

const matchRepoistory = new MatchesRepository();

const patchFinishMatchUseCase = new PatchFinishMatchUseCase(matchRepoistory);

const patchFinisMatchController = new PatchFinishMatchController(
  patchFinishMatchUseCase,
);

export default patchFinisMatchController;
