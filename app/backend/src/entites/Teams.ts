export default class Team {
  public id: number;

  public team_name: string;

  constructor(team: Omit<Team, 'id'>) {
    Object.assign(this, team);
  }
}
