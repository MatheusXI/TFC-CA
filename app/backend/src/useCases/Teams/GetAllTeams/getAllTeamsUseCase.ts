import ITeamRepository from '../../../repositories/Teams/ITeamsRepository';

export default class GetAllTeamsUseCase {
  constructor(private teamRepository: ITeamRepository) {}

  async execute() {
    const teams = await this.teamRepository.getAllTeams();

    return teams;
  }
}
