import { Model, DataTypes } from "sequelize";
import db from "../config/db";
import { IUser } from "../interfaces/IUser";

class User extends Model<IUser> {
  // hash(password: string, salt: string) {
  //   return bcrypt.hash(password, salt);
  // }
  // validatePassword(password: string) {
  //   return this.hash(password, this.salt).then(
  //     (hash: any) => hash === this.password
  //   );
  // }
}

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phone: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  },
  { sequelize: db, modelName: "user" }
);

// User.addHook("beforeCreate", async (user: User) => {
//   const salt = bcrypt.genSaltSync(9);
//   user.salt = salt;
//   const hash = await bcrypt.hash(user.password, salt);
//   user.password = hash;
// });

export default User;
