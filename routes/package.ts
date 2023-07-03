import express, { Router } from "express";
import { isDelivery } from "../middleware/validateMiddleware";
import {
  editPackage,
  getAllPackages,
  selectPackages
} from "../controllers/packagesController";

const router: Router = express.Router();

/**
 * @openapi
 * /api/package/{id}/select/packages:
 *    put:
 *      tags:
 *      - packages
 *      summary: To select a package
 *
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/bodyPackageSelect'
 *        required: true
 *      responses:
 *        200:
 *          description: (OK) Created
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/bodyPackageSelect'
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
router.put("/:id/select/packages", isDelivery, selectPackages);

/**
 * @openapi
 * /api/package/{idUser}/edit/package/{idPackage}:
 *    put:
 *      tags:
 *      - packages
 *      summary: To edit a package selected by user
 *
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/bodyPackagesEditPut'
 *        required: true
 *      responses:
 *        200:
 *          description: (OK) Created
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/bodyPackagesEditPut'
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
router.put("/:idUser/edit/package/:idPackage", isDelivery, editPackage);

/**
 * @openapi
 * /api/package/{idUser}/packages:
 *    get:
 *      tags:
 *      - packages
 *      summary: To view a package selected by user
 *
 *      requestBody:
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/bodyPackagesGet'
 *        required: true
 *      responses:
 *        200:
 *          description: (OK) Created
 *          content:
 *            application/json:
 *              schema:
 *                $ref: '#/components/schemas/bodyPackagesGet'
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
router.get("/:idUser/packages", isDelivery, getAllPackages);

export default router;
