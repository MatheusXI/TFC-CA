import MatchesRepository from '../../../repositories/Matches/MatchesRepository';
import IUpdateMatchDTO from './updateMatchDTO';

export default class UpdateMatchUseCase {
  constructor(private matchRepository: MatchesRepository) {}

  async execute(data: IUpdateMatchDTO) {
    const updatedMatch = await this.matchRepository.updateMatch(data);
    return updatedMatch;
  }
}
