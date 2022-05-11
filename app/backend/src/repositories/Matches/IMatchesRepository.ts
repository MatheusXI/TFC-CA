import Matches from '../../database/models/MatchesModel';

export default interface IMatchesRepository {
  getAllMatches(): Promise<Matches[] | null>;
  getMatchesByProgress(progress: boolean): Promise<Matches[] | null>;
}
