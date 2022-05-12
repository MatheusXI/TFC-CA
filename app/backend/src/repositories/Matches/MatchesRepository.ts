import Teams from '../../database/models/TeamsModel';
import Matches from '../../database/models/MatchesModel';
import IMatchesRepository from './IMatchesRepository';
import { IMatch } from '../../useCases/Matches/CreateMatch/createMatchDTO';

export default class MatchesRepository implements IMatchesRepository {
  private matchesModel;

  constructor() {
    this.matchesModel = Matches;
  }

  async createMatch(data: IMatch): Promise<IMatch | null> {
    const matchCreated = await this.matchesModel.create(data);
    console.log(matchCreated, 'matchcreated');
    const matches = await (
      await this.matchesModel.findAll({
        attributes: { exclude: ['home_team', 'away_team'] },
      })
    ).reverse();
    return matches[0];
  }

  async getAllMatches(): Promise<Matches[] | null> {
    const matchesArray = await this.matchesModel.findAll({
      attributes: { exclude: ['home_team', 'away_team'] },
      include: [
        { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return matchesArray;
  }

  async getMatchesByProgress(progress: boolean): Promise<Matches[] | null> {
    const matchesArray = await this.matchesModel.findAll({
      attributes: { exclude: ['home_team', 'away_team'] },
      where: { inProgress: progress },
      include: [
        { model: Teams, as: 'teamHome', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'teamAway', attributes: { exclude: ['id'] } },
      ],
    });
    return matchesArray;
  }
}
