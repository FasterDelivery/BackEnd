import { Model, DataTypes } from "sequelize";
import db from "../config/db";
import { IPackage } from "../interfaces/IPackage";

class Package extends Model<IPackage> {
  public id!: number;
  public clientname!: string;
  public image!: string;
  public quantity!: number;
  public weight!: number;
  public deliveryday!: Date;
  public address!: string;
  public status!: string;


  static findByName(clientname: string) {
    return Package.findOne({ where: { clientname } });
  }
}

Package.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    clientname: { type: DataTypes.STRING },
    image: { type: DataTypes.STRING },
    quantity: { type: DataTypes.INTEGER },
    weight: { type: DataTypes.FLOAT },
    deliveryday: { type: DataTypes.DATE },
    address: { type: DataTypes.STRING },
    status: { type: DataTypes.STRING },

  },
  { sequelize: db, modelName: "package" }
);

export default Package;
