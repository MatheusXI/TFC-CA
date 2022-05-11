import CustomError from '../../../auxMiddlewares/Erro/CustomError';
import IMatchesRepository from '../../../repositories/Matches/IMatchesRepository';

export default class GetMatchesByProgressUseCase {
  constructor(private matchesRepository: IMatchesRepository) {}

  async execute(progress: string) {
    const inProgress = progress === 'true';
    console.log(inProgress, 'inProgress');
    const matches = await this.matchesRepository.getMatchesByProgress(inProgress);
    if (!matches) throw new CustomError(404, 'No matches found!');
    return matches;
  }
}
