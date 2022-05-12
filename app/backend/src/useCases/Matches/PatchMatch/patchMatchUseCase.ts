import CustomError from '../../../auxMiddlewares/Erro/CustomError';
import MatchesRepository from '../../../repositories/Matches/MatchesRepository';

export default class PatchMatchUseCase {
  constructor(private matchesRepository: MatchesRepository) {}

  async execute(data: any) {
    if (Number.isNaN(data.id)) throw new CustomError(401, 'Invalid Id');
    const userUpdated = await this.matchesRepository.updateMatch(data);
    if (!userUpdated) throw new Error('Algo deu errado');

    return userUpdated;
  }
}
