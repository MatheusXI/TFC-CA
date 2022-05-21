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
    const totalPoints = CalculateTotalPoints.executeHome(teams);
    return totalPoints;
  }

  private static generateTotalGames(teams: Teams) {
    const totalHomeGames = teams.teamHome?.length;
    if (!totalHomeGames) return null;
    const totalGames = totalHomeGames;
    return totalGames;
  }

  private static generateTotalVictories(teams: Teams) {
    const totalHomeWins = teams.teamHome?.filter(
      ({ homeTeamGoals, awayTeamGoals }) => homeTeamGoals > awayTeamGoals,
    );

    if (!totalHomeWins) return null;
    const totalVictories = totalHomeWins.length;

    return totalVictories;
  }

  private static generateTotalLosses(teams: Teams) {
    const totalHomeLoses = teams.teamHome?.filter(
      ({ homeTeamGoals, awayTeamGoals }) => homeTeamGoals < awayTeamGoals,
    );

    if (!totalHomeLoses) return null;
    const totalLosses = totalHomeLoses.length;

    return totalLosses;
  }

  private static generateTotalDraws(teams: Teams) {
    const totalHomeDraws = teams.teamHome?.filter(
      ({ homeTeamGoals, awayTeamGoals }) => homeTeamGoals === awayTeamGoals,
    );
    if (!totalHomeDraws) return null;
    const totalDraws = totalHomeDraws.length;

    return totalDraws;
  }

  private static generateGoalsFavor(teams: Teams) {
    const goalsFavor = CalculateGoals.calculateGoalsFavorHome(teams);
    if (!goalsFavor) return null;

    return goalsFavor;
  }

  private static generateGoalsOwn(teams: Teams) {
    const goalsOwn = CalculateGoals.calculateGoalsOwnHome(teams);
    if (!goalsOwn) return null;

    return goalsOwn;
  }

  private static calculateGoalsBalance(team: Teams) {
    const totalGoalsFavor = CalculateGoals.calculateGoalsFavorHome(team);
    const totalGoalsOwn = CalculateGoals.calculateGoalsOwnHome(team);
    if (!totalGoalsFavor || !totalGoalsOwn) return null;
    const balance = totalGoalsFavor - totalGoalsOwn;
    return balance;
  }

  private static generateGoalsBalace(teams: Teams) {
    const goalsBalance = CreateLeaderBoardUseCase.calculateGoalsBalance(teams);
    if (!goalsBalance && goalsBalance !== 0) return null;

    return goalsBalance;
  }

  private static calculateEficiency(team: Teams) {
    const totalPoints = CalculateTotalPoints.executeHome(team);
    const totalHomeGames = team.teamHome;

    if (!totalHomeGames || !totalPoints) return null;
    const totalGames = totalHomeGames.length;
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
