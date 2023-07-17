import { Model, DataTypes } from "sequelize";
import db from "../config/db";
import { IDjurada } from "../interfaces/IDjurada";

class Djurada extends Model<IDjurada> {
  public id!: number;
  public dayDeclaracionJurada!: Date;

  static findByName(dayDeclaracionJurada: Date) {
    return Djurada.findOne({ where: { dayDeclaracionJurada } });
  }
}

Djurada.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    dayDeclaracionJurada: { type: DataTypes.DATE }
  },
  { sequelize: db, modelName: "djurada" }
);

export default Djurada;
