import { Model, DataTypes } from "sequelize";
import db from "../config/db";
import { IPackage } from "../interfaces/IPackage";

class Package extends Model<IPackage> {
  // static findByName(clientname: string) {
  //   return Package.findOne({ where: { clientname } });
  // }
}

Package.init(
  {
    clientname: { type: DataTypes.STRING },
    image: { type: DataTypes.ARRAY(DataTypes.STRING) },
    quantity: { type: DataTypes.INTEGER },
    weight: { type: DataTypes.INTEGER },
    deliveryday: { type: DataTypes.DATE },
    address: { type: DataTypes.STRING },
    status: { type: DataTypes.STRING }
  },
  { sequelize: db, modelName: "package" }
);

export default Package;
