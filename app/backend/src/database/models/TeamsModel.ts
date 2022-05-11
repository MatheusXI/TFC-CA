/* eslint-disable linebreak-style */
import { DataTypes, Model } from 'sequelize';
import db from '.';

// import OtherModel from './OtherModel';
class Teams extends Model {
  // public <campo>!: <tipo>;
  id!: number;

  teamName!: string;
}

Teams.init(
  {
    // ... Campos
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    team_name: DataTypes.STRING,
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

// OtherModel.belongsTo(Example, { foreignKey: 'campoA', as: 'campoEstrangeiroA' });
// OtherModel.belongsTo(Example, { foreignKey: 'campoB', as: 'campoEstrangeiroB' });

export default Teams;
