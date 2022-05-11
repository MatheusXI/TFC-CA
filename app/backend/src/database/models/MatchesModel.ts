/* eslint-disable linebreak-style */
import { DataTypes, Model } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';
import Teams from './TeamsModel';

class Matches extends Model {
  // public <campo>!: <tipo>;
  id!: number;

  homeTeam!: number;
}

Matches.init(
  {
    // ... Campos
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    home_team: {
      type: DataTypes.NUMBER,
      references: {
        model: Teams,
        key: 'id',
      },
    },
    home_team_goals: DataTypes.NUMBER,
    away_team: {
      type: DataTypes.NUMBER,
      references: {
        model: Teams,
        key: 'id',
      },
    },
    away_team_goals: DataTypes.NUMBER,
    in_progress: DataTypes.BOOLEAN,
  },
  {
    // ... Outras configs
    underscored: true,
    sequelize: db,
    // modelName: 'example',
    timestamps: false,
  },
);

/**
 * `Workaround` para aplicar as associations em TS:
 * Associations 1:N devem ficar em uma das instâncias de modelo
 * */

Matches.belongsTo(Teams, { foreignKey: 'home_team', as: 'home_team_id' });
Matches.belongsTo(Teams, { foreignKey: 'away_team', as: 'away_team_id' });

// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });
Teams.hasMany(Matches, { foreignKey: 'home_team', as: 'home_team_id' });
Teams.hasMany(Matches, { foreignKey: 'away_team', as: 'away_team_id' });

// Example.hasMany(OtherModel, { foreignKey: 'campoC', as: 'campoEstrangeiroC' });
// Example.hasMany(OtherModel, { foreignKey: 'campoD', as: 'campoEstrangeiroD' });

export default Matches;
