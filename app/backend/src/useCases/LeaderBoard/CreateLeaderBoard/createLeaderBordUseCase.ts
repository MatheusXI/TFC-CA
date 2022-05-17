import Matches from '../../../database/models/MatchesModel';
import IMatchesRepository from '../../../repositories/Matches/IMatchesRepository';
import ITeamRepository from '../../../repositories/Teams/ITeamsRepository';
import IUserRepository from '../../../repositories/User/IUserRepository';

interface IResults {
  id: number;
  goals: number;
}
export default class CreateLeaderBoardUseCase {
  constructor(
    private userRepository: IUserRepository,
    private teamRepository: ITeamRepository,
    private matchesRepository: IMatchesRepository,
  ) {}

  static async winnersAndLosers(matches: Matches[]) {
    const winners: IResults[] = [];
    const draws: IResults[] = [];

    matches?.forEach(({ homeTeamGoals, awayTeamGoals, homeTeam, awayTeam }) => {
      if (homeTeamGoals > awayTeamGoals) {
        winners.push({ id: homeTeam, goals: homeTeamGoals });
      }
      if (awayTeamGoals > homeTeamGoals) {
        winners.push({ id: awayTeam, goals: awayTeamGoals });
      }
      draws.push({ id: homeTeam, goals: homeTeamGoals });
      draws.push({ id: awayTeam, goals: awayTeamGoals });
    });

    return { winners, draws };
  }

  async calculateTotalPoints() {
    const matches = await this.matchesRepository.getAllMatches();
    if (!matches) return;
    const { winners, draws } = await CreateLeaderBoardUseCase.winnersAndLosers(
      matches,
    );
    console.log(winners, draws);
  }
}
