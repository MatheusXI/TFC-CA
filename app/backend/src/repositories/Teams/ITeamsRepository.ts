import Teams from '../../database/models/TeamsModel';

export default interface ITeamRepository {
  getAllTeams(): Promise<Teams[] | null>;
  getTeamById(id: number): Promise<Teams | null>;
  getTeamAndMatches(): Promise<Teams[]>
}
