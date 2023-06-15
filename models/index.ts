import User from "./User";
import Package from "./Package";

//User.hasMany(Package);
//Package.belongsTo(User);

/**
 * @openapi
 * components:
 *   schemas:
 *
 *     bodyUsersLoginPost:
 *       type: object
 *       properties:
 *         email:
 *           type: string
 *         password:
 *           type: string
 */

export { User, Package };
