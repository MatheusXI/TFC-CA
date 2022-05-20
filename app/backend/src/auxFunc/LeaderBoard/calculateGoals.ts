import Teams from '../../entites/Teams';

export default class CalculateGoals {
  private static calculateHomeGoalsFavor(team: Teams) {
    const goalsFavorHome = team.teamHome?.reduce(
      (acc, curr) => {
        acc.goalsFavor += curr.homeTeamGoals;
        return acc;
      },
      { goalsFavor: 0 },
    ).goalsFavor;
    return goalsFavorHome;
  }

  private static calculateAwayGoalsFavor(team: Teams) {
    const goalsFavorAway = team.teamAway?.reduce(
      (acc, curr) => {
        acc.goalsFavor += curr.awayTeamGoals;
        return acc;
      },
      { goalsFavor: 0 },
    ).goalsFavor;
    return goalsFavorAway;
  }

  private static calculateHomeGoalsOwn(team: Teams) {
    const goalsOwnHome = team.teamHome?.reduce(
      (acc, curr) => {
        acc.goalsOwn += curr.awayTeamGoals;
        return acc;
      },
      { goalsOwn: 0 },
    ).goalsOwn;
    return goalsOwnHome;
  }

  private static calculateAwayGoalsOwn(team: Teams) {
    const goalsOwnAway = team.teamAway?.reduce(
      (acc, curr) => {
        acc.goalsOwn += curr.homeTeamGoals;
        return acc;
      },
      { goalsOwn: 0 },
    ).goalsOwn;
    return goalsOwnAway;
  }

  static calculateGoalsFavor(team: Teams) {
    const homeGoalsFavor = CalculateGoals.calculateHomeGoalsFavor(team);
    const awayGoalsFavor = CalculateGoals.calculateAwayGoalsFavor(team);
    if (
      (!homeGoalsFavor && homeGoalsFavor !== 0)
      || (!awayGoalsFavor && awayGoalsFavor !== 0)
    ) { return null; }

    const goalsFavor = homeGoalsFavor + awayGoalsFavor;
    return goalsFavor;
  }

  static calculateGoalsOwn(team: Teams) {
    const homeGoalsOwn = CalculateGoals.calculateHomeGoalsOwn(team);
    const awayGoalsOwn = CalculateGoals.calculateAwayGoalsOwn(team);
    if (
      (!homeGoalsOwn && homeGoalsOwn !== 0)
      || (!awayGoalsOwn && awayGoalsOwn !== 0)
    ) { return null; }

    const goalsOwn = homeGoalsOwn + awayGoalsOwn;
    return goalsOwn;
  }
}
