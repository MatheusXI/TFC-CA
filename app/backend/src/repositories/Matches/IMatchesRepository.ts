import { IMatch } from '../../useCases/Matches/CreateMatch/createMatchDTO';
import Matches from '../../database/models/MatchesModel';

export default interface IMatchesRepository {
  getAllMatches(): Promise<Matches[] | null>;
  getMatchesByProgress(progress: boolean): Promise<Matches[] | null>;
  createMatch(data: IMatch): Promise< IMatch | null>
}
