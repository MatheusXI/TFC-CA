import Matches from '../../database/models/MatchesModel';
import IMatchesRepository from './IMatchesRepository';

export default class MatchesRepository implements IMatchesRepository {
  private matchesModel;

  constructor() {
    this.matchesModel = Matches;
  }

  async getAllMatches(): Promise<Matches[] | null> {
    const matchesArray = await this.matchesModel.findAll();
    return matchesArray;
  }

  async getMatchesByProgress(progress: boolean): Promise<Matches[] | null> {
    const matchesArray = await this.matchesModel.findAll({
      where: { inProgress: progress },
    });
    return matchesArray;
  }
}
