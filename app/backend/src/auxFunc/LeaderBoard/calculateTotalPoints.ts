import { ITeamAnMatches } from '../../entites/Teams';

export default class CalculateTotalPoints {
  private static calculateHomePoints(team: ITeamAnMatches) {
    const pointsHome = team.teamHome?.reduce(
      (acc, curr) => {
        if (curr.homeTeamGoals > curr.awayTeamGoals) {
          acc.totalPoints += 3;
        }
        if (curr.awayTeamGoals === curr.homeTeamGoals) {
          acc.totalPoints += 1;
        }
        return acc;
      },
      { totalPoints: 0 },
    );
    return pointsHome?.totalPoints;
  }

  private static calculateAwayPoints(team: ITeamAnMatches) {
    const pointsAway = team.teamAway?.reduce(
      (acc, curr) => {
        if (curr.homeTeamGoals < curr.awayTeamGoals) {
          acc.totalPoints += 3;
        }
        if (curr.awayTeamGoals === curr.homeTeamGoals) {
          acc.totalPoints += 1;
        }
        return acc;
      },
      { totalPoints: 0 },
    );
    return pointsAway?.totalPoints;
  }

  static execute(team: ITeamAnMatches) {
    const pointsHome = CalculateTotalPoints.calculateHomePoints(team);
    const pointsAway = CalculateTotalPoints.calculateAwayPoints(team);
    if ((!pointsAway && pointsAway !== 0) || (!pointsHome && pointsHome !== 0)) return null;
    return pointsHome + pointsAway;
  }
}
