export interface ITeam {
  id?: number;
  teamName: string;
}

export default class Team {
  public id: number;

  public teamName: string;

  constructor(team: ITeam) {
    Object.assign(this, team);
  }
}
