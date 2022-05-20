import ITeamRepository from '../../../repositories/Teams/ITeamsRepository';

export default class GetTeamAndMatchesUseCase {
  constructor(private teamRepository: ITeamRepository) {}

  async execute() {
    const teams = await this.teamRepository.getTeamAndMatches();
    return teams;
  }
}
