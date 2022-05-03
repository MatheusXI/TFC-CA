export default class Matches {
  public id: number;

  homeTeam: number;

  homeTeamGoals: number;

  awayTeam: number;

  awayTeamGoals: number;

  inProgress: boolean;

  constructor(Match: Omit<Matches, 'id'>) {
    Object.assign(this, Match);
  }
}
