import { IMatch } from '../../useCases/Matches/CreateMatch/createMatchDTO';
import Matches from '../../database/models/MatchesModel';
import IPatchMatchDTO from '../../useCases/Matches/PatchMatch/patchMatchDTO';

export default interface IMatchesRepository {
  getAllMatches(): Promise<Matches[] | null>;
  getmatchById(id: number): Promise<Matches | null>;
  updateProgress(id: number): Promise<Matches | null>;
  getMatchesByProgress(progress: boolean): Promise<Matches[] | null>;
  createMatch(data: IMatch): Promise<IMatch | null>;
  updateMatch(data: IPatchMatchDTO): Promise<Matches | null>;
}
