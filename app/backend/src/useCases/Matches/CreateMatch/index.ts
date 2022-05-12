import MatchesRepository from '../../../repositories/Matches/MatchesRepository';
import TokenRepository from '../../../repositories/Token/TokenRepository';
import UserRepository from '../../../repositories/User/UserRepository';
import CreateMatchController from './createMatchController';
import CreateMatchUseCase from './createMatchUseCase';

const userRepository = new UserRepository();
const tokenRepository = new TokenRepository(userRepository);
const matchRepository = new MatchesRepository();
const createMatchUseCase = new CreateMatchUseCase(
  tokenRepository,
  matchRepository,
);

const createMatchController = new CreateMatchController(createMatchUseCase);

export default createMatchController;
