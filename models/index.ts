import User from "./User";
import Package from "./Package";

User.hasMany(Package);
Package.belongsTo(User);

export { User, Package };

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
