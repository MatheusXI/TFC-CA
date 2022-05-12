import CustomError from '../../../auxMiddlewares/Erro/CustomError';
import IMatchesRepository from '../../../repositories/Matches/IMatchesRepository';

export default class PatchFinishMatchUseCase {
  constructor(private matchesRepository: IMatchesRepository) {}

  async execute(id: string) {
    if (Number.isNaN(+id)) throw new CustomError(401, 'Invalid Id');
    const userUpdated = await this.matchesRepository.updateProgress(+id);
    if (!userUpdated) throw new Error('Algo deu errado');

    return userUpdated;
  }
}
