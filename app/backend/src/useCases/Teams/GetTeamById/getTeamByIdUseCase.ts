import CustomError from '../../../auxMiddlewares/Erro/CustomError';
import ITeamRepository from '../../../repositories/Teams/ITeamsRepository';

export default class GetTeamByIdUseCase {
  constructor(private teamRepository: ITeamRepository) {}

  async execute(id: string) {
    const idNum = +id;
    if (Number.isNaN(idNum)) throw new CustomError(401, 'Invalid Id');

    const team = await this.teamRepository.getTeamById(idNum);
    if (!team) throw new CustomError(404, 'Team not found');

    return team;
  }
}
