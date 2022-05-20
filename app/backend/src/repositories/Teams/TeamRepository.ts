import Matches from '../../database/models/MatchesModel';
import TeamsModel from '../../database/models/TeamsModel';
import ITeamRepository from './ITeamsRepository';

export default class TeamRepository implements ITeamRepository {
  private teamModel;

  constructor() {
    this.teamModel = TeamsModel;
  }

  async getAllTeams(): Promise<TeamsModel[] | null> {
    const teams = await this.teamModel.findAll();
    return teams;
  }

  async getTeamById(id: number): Promise<TeamsModel | null> {
    const team = await this.teamModel.findByPk(id);
    return team;
  }

  async getTeamAndMatches() {
    const teams = await this.teamModel.findAll({
      include: [
        { model: Matches, as: 'teamHome', where: { inProgress: false } },
        { model: Matches, as: 'teamAway', where: { inProgress: false } },
      ],
    });
    return teams;
  }
}
