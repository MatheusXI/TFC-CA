type Filtro = 'totalVictories' | 'goalsBalance' | 'goalsFavor' | 'goalsOwn';

export interface Iresults {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
}
export default class GenerateRank {
  private static isWinner(
    teams: Iresults[],
    type: Filtro,
  ): Iresults[] | boolean {
    const sortedTeams = teams.sort((a, b) => b[type] - a[type]);

    return this.checkWinner(sortedTeams, type);
  }

  private static checkWinner(sortedTeams: Iresults[], type: Filtro) {
    const isWinner = sortedTeams.filter(
      (team) => team[type] === sortedTeams[0][type],
    ).length;
    if (isWinner > 1) return false;
    return sortedTeams;
  }

  static generateRank(teams: Iresults[]) {
    const sortedByTotalVictories = GenerateRank.isWinner(
      teams,
      'totalVictories',
    );
    if (sortedByTotalVictories) return sortedByTotalVictories;
    const sortedByBalance = GenerateRank.isWinner(teams, 'goalsBalance');
    if (sortedByBalance) return sortedByBalance;
    const sortedByGoalsFavor = GenerateRank.isWinner(teams, 'goalsFavor');
    if (sortedByGoalsFavor) return sortedByGoalsFavor;
    const sortedByGoalsOwn = GenerateRank.isWinner(teams, 'goalsOwn');
    if (sortedByGoalsOwn) return sortedByGoalsOwn;
  }
}
