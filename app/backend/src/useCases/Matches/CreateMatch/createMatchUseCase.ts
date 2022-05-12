import IMatchesRepository from '../../../repositories/Matches/IMatchesRepository';
import ITokenRepository from '../../../repositories/Token/ITokenRepository';
import ICreateMatchDTO from './createMatchDTO';

export default class CreateMatchUseCase {
  constructor(
    private tokenRepository: ITokenRepository,
    private matchesRepository: IMatchesRepository,
  ) {}

  async execute(data: ICreateMatchDTO) {
    await this.tokenRepository.userAuthenticate(data.token);
    const matchCreated = await this.matchesRepository.createMatch(data.match);
    if (!matchCreated) throw new Error();
    return matchCreated;
  }
}
