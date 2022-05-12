import CustomError from '../../../auxMiddlewares/Erro/CustomError';
import MatchesRepository from '../../../repositories/Matches/MatchesRepository';

export default class PatchMatchUseCase {
  constructor(private matchesRepository: MatchesRepository) {}

  async execute(id: number) {
    if (Number.isNaN(id)) throw new CustomError(401, 'Invalid Id');
    const userUpdated = await this.matchesRepository.endMatch(id);
    return userUpdated;
  }
}
