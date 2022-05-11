import CustomError from '../../../auxMiddlewares/Erro/CustomError';
import IMatchesRepository from '../../../repositories/Matches/IMatchesRepository';

export default class GetAllMatchesUseCase {
  constructor(private matchesRepository: IMatchesRepository) {}

  async execute() {
    const matches = await this.matchesRepository.getAllMatches();
    if (!matches) throw new CustomError(404, 'No matches found!');
    return matches;
  }
}
