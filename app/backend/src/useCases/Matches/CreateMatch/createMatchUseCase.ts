import ITeamRepository from '../../../repositories/Teams/ITeamsRepository';
import IMatchesRepository from '../../../repositories/Matches/IMatchesRepository';
import ITokenRepository from '../../../repositories/Token/ITokenRepository';
import ICreateMatchDTO from './createMatchDTO';
import CustomError from '../../../auxMiddlewares/Erro/CustomError';

export default class CreateMatchUseCase {
  constructor(
    private tokenRepository: ITokenRepository,
    private matchesRepository: IMatchesRepository,
    private teamRepository: ITeamRepository,
  ) {}

  async execute(data: ICreateMatchDTO) {
    const home = await this.teamRepository.getTeamById(data.match.homeTeam);
    const away = await this.teamRepository.getTeamById(data.match.awayTeam);

    if (!home || !away) { throw new CustomError(401, 'There is no team with such id!'); }

    await this.tokenRepository.userAuthenticate(data.token);
    const matchCreated = await this.matchesRepository.createMatch(data.match);
    if (!matchCreated) throw new Error();
    return matchCreated;
  }
}
