import IMatchesRepository from '../../../repositories/Matches/IMatchesRepository';
import CustomError from '../../../auxMiddlewares/Erro/CustomError';
import IPatchMatchDTO from './patchMatchDTO';

export default class PatchMatchUseCase {
  constructor(private matchesRepository: IMatchesRepository) {}

  async execute(data: IPatchMatchDTO) {
    if (Number.isNaN(data.id)) throw new CustomError(401, 'Invalid Id');
    const userUpdated = await this.matchesRepository.updateMatch(data);
    if (!userUpdated) {
      throw new Error('There is no team with such id!');
    }

    return userUpdated;
  }
}
