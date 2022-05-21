import GenerateRank from '../../../auxFunc/LeaderBoard/generateRank';
import CalculateTotalPoints from '../../../auxFunc/LeaderBoard/calculateTotalPoints';
import Teams from '../../../entites/Teams';
import ITeamRepository from '../../../repositories/Teams/ITeamsRepository';
import CalculateGoals from '../../../auxFunc/LeaderBoard/calculateGoals';

export interface Iresult {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  goalsFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: number;
}

export default class CreateLeaderBoardUseCase {
  teamsAndMatches: Teams[] | any;

  constructor(private teamRepository: ITeamRepository) {}

  private static generateName(teams: Teams) {
    return teams.teamName;
  }

  private static generateTotalPoints(teams: Teams) {
    const totalPoints = CalculateTotalPoints.executeAway(teams);
    return totalPoints;
  }

  private static generateTotalGames(teams: Teams) {
    const totalAwayGames = teams.teamAway?.length;
    if (!totalAwayGames) return null;
    const totalGames = totalAwayGames;
    return totalGames;
  }

  private static generateTotalVictories(teams: Teams) {
    const totalAwayWins = teams.teamAway?.filter(
      ({ homeTeamGoals, awayTeamGoals }) => homeTeamGoals < awayTeamGoals,
    );

    if (!totalAwayWins && totalAwayWins !== 0) return null;
    const totalVictories = totalAwayWins.length;

    return totalVictories;
  }

  private static generateTotalLosses(teams: Teams) {
    const totalAwayLoses = teams.teamHome?.filter(
      ({ homeTeamGoals, awayTeamGoals }) => homeTeamGoals > awayTeamGoals,
    );

    if (!totalAwayLoses && totalAwayLoses !== 0) return null;
    const totalLosses = totalAwayLoses.length;

    return totalLosses;
  }

  private static generateTotalDraws(teams: Teams) {
    const totalAwayDraws = teams.teamAway?.filter(
      ({ homeTeamGoals, awayTeamGoals }) => homeTeamGoals === awayTeamGoals,
    );
    if (!totalAwayDraws && totalAwayDraws !== 0) return null;
    const totalDraws = totalAwayDraws.length;

    return totalDraws;
  }

  private static generateGoalsFavor(teams: Teams) {
    const goalsFavor = CalculateGoals.calculateGoalsFavorAway(teams);
    if (!goalsFavor && goalsFavor !== 0) return null;

    return goalsFavor;
  }

  private static generateGoalsOwn(teams: Teams) {
    const goalsOwn = CalculateGoals.calculateGoalsOwnaway(teams);
    if (!goalsOwn && goalsOwn !== 0) return null;

    return goalsOwn;
  }

  private static calculateGoalsBalance(team: Teams) {
    const totalGoalsFavor = CalculateGoals.calculateGoalsFavorAway(team);
    const totalGoalsOwn = CalculateGoals.calculateGoalsOwnaway(team);
    if (
      (!totalGoalsFavor && totalGoalsFavor !== 0)
      || (!totalGoalsOwn && totalGoalsOwn !== 0)
    ) { return null; }
    const balance = totalGoalsFavor - totalGoalsOwn;
    return balance;
  }

  private static generateGoalsBalace(teams: Teams) {
    const goalsBalance = CreateLeaderBoardUseCase.calculateGoalsBalance(teams);
    if (!goalsBalance && goalsBalance !== 0) return null;

    return goalsBalance;
  }

  private static calculateEficiency(team: Teams) {
    const totalPoints = CalculateTotalPoints.executeAway(team);
    const totalAwayGames = team.teamAway;

    if (!totalAwayGames || (!totalPoints && totalPoints !== 0)) return null;
    const totalGames = totalAwayGames.length;
    return +((totalPoints / (totalGames * 3)) * 100).toFixed(2);
  }

  private static generateEficiency(teams: Teams) {
    const efficiency = CreateLeaderBoardUseCase.calculateEficiency(teams);
    if (!efficiency && efficiency !== 0) return null;
    return efficiency;
  }

  private static generateRank(teams: any) {
    const times: Iresult[] = teams;
    const rankedTeam = GenerateRank.generateRank(times);
    return rankedTeam;
  }

  private static generateResult(teams: Teams[]) {
    const result = teams.map((team) => ({
      name: CreateLeaderBoardUseCase.generateName(team),
      totalPoints: CreateLeaderBoardUseCase.generateTotalPoints(team),
      totalGames: CreateLeaderBoardUseCase.generateTotalGames(team),
      totalVictories: CreateLeaderBoardUseCase.generateTotalVictories(team),
      totalDraws: CreateLeaderBoardUseCase.generateTotalDraws(team),
      totalLosses: CreateLeaderBoardUseCase.generateTotalLosses(team),
      goalsFavor: CreateLeaderBoardUseCase.generateGoalsFavor(team),
      goalsOwn: CreateLeaderBoardUseCase.generateGoalsOwn(team),
      goalsBalance: CreateLeaderBoardUseCase.generateGoalsBalace(team),
      efficiency: CreateLeaderBoardUseCase.generateEficiency(team),
    }));
    return result;
  }

  async execute() {
    const teams = await this.teamRepository.getTeamAndMatches();
    const result = await CreateLeaderBoardUseCase.generateResult(teams);
    const rank = CreateLeaderBoardUseCase.generateRank(result);
    return rank;
  }
}
