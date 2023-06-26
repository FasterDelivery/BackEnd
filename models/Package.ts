import { Model, DataTypes } from "sequelize";
import db from "../config/db";
import { IPackage } from "../interfaces/IPackage";

class Package extends Model<IPackage> {
  public id!: number;
  public clientname!: string;
  public image!: string[];
  public quantity!: number;
  public weight!: number;
  public deliveryday!: Date;
  public address!: string;
  public status!: string;
  public UserId!: number;

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
    image: { type: DataTypes.ARRAY(DataTypes.STRING) },
    quantity: { type: DataTypes.INTEGER },
    weight: { type: DataTypes.INTEGER },
    deliveryday: { type: DataTypes.DATE },
    address: { type: DataTypes.STRING },
    status: { type: DataTypes.STRING },
    UserId: { type: DataTypes.INTEGER }
  },
  { sequelize: db, modelName: "package" }
);

export default Package;
