import TeamRepository from '../../../repositories/Teams/TeamRepository';
import MatchesRepository from '../../../repositories/Matches/MatchesRepository';
import TokenRepository from '../../../repositories/Token/TokenRepository';
import UserRepository from '../../../repositories/User/UserRepository';
import CreateMatchController from './createMatchController';
import CreateMatchUseCase from './createMatchUseCase';

const userRepository = new UserRepository();
const teamRepository = new TeamRepository();
const tokenRepository = new TokenRepository(userRepository);
const matchRepository = new MatchesRepository();
const createMatchUseCase = new CreateMatchUseCase(
  tokenRepository,
  matchRepository,
  teamRepository,
);

const createMatchController = new CreateMatchController(createMatchUseCase);

export default createMatchController;
