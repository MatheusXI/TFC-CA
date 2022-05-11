import MatchesRepository from '../../../repositories/Matches/MatchesRepository';
import GetMatchesByProgressController from './getMatchesByProgressController';
import GetMatchesByProgressUseCase from './getMatchesByProgressUseCase';

const matchesRepository = new MatchesRepository();

const getMatchesByProgressUseCase = new GetMatchesByProgressUseCase(
  matchesRepository,
);

const getMatchesByProgressController = new GetMatchesByProgressController(
  getMatchesByProgressUseCase,
);

export default getMatchesByProgressController;
