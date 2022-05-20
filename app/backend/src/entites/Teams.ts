import Matches from './Matches';

export interface ITeam {
  id?: number;
  teamName: string;
}
export interface ITeamAnMatches extends ITeam {
  teamHome?: Matches[];
  teamAway?: Matches[];
}
export default class Team {
  public id: number;

  public teamName: string;

  public teamHome?: Matches[];

  public teamAway?: Matches[];

  constructor(team: ITeam) {
    Object.assign(this, team);
  }
}
