import Teams from '../../database/models/TeamsModel';
import Matches from '../../database/models/MatchesModel';
import IMatchesRepository from './IMatchesRepository';

export default class MatchesRepository implements IMatchesRepository {
  private matchesModel;

  constructor() {
    this.matchesModel = Matches;
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
