export class Matches {
    public id: number

    home_team: number
    home_team_goals: number
    away_team: number
    away_team_goals: number
    in_progress: boolean

    constructor(Match: Omit<Matches, 'id'>){
        Object.assign(this, Match);
    }
}