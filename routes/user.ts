import express, { Router } from "express";
import {
  deleteUser,
  editUser,
  login,
  register
} from "../controllers/userController";
import { isDelivery } from "../middleware/validateMiddleware";
const router: Router = express.Router();

router.post("/register", register);

/**
 * @openapi
 * /api/user/login:
 *    post:
 *      tags:
 *      - users
 *      summary: To login a user
 *
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/bodyUsersLoginPost'
 *        required: true
 *      responses:
 *        200:
 *          description: (OK) Created
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/bodyUsersLoginPost'
 *        400:
 *          $ref: '#/components/responses/BadRequest'
 *        401:
 *          $ref: '#/components/responses/Unauthorized'
 *        404:
 *          $ref: '#/components/responses/NotFound'
 *        500:
 *          $ref: '#/components/responses/ServerError'
 * components:
 *       responses:
 *
 *          Unauthorized:
 *            description: (Unauthorized) No hay autorizaciÃ³n para llamar al servicio
 *
 *          NotFound:
 *            description: (NotFound) No se encontrÃ³ informaciÃ³n
 *
 *          BadRequest:
 *            description: (Bad Request) Los datos enviados son incorrectos o hay datos obligatorios no enviados
 *
 *          ServerError:
 *            description: Error en servidor
 */

router.post("/login", login);

router.put("/edit/:id", isDelivery, editUser);

router.delete("/delete/:id", isDelivery, deleteUser);

export default router;
