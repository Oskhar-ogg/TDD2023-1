import  { Router } from 'express';
import { getBitacora, getBitacoraCount, getBitacoras, saveBitacora, updateBitacora, deleteBitacora } from '../controllers/bitacora';

const router = Router()
/** 
 * @swagger
 * tags:
 *  name: Bitacoras
 *  description: Bitacora API
 * 
 *    
*/


router.get('/bitacora/', getBitacora)
/**
 * @swagger
 * /bitacora:
 *      get:
 *          summary: Retrieve a list of bitacora
 *          tags: [Bitacoras] 
 */


router.get('/bitacora/count', getBitacoraCount)

/**
 * @swagger
 * /bitacora/count:
 *      get:
 *          summary: Retrieve a id of bitacora
 *          tags: [Bitacoras]
 */

router.get('/bitacora/:id', getBitacoras)

/**
 * @swagger
 * /bitacora/{id}:
 *       get:
 *          summary: Get total count of bitacora.
 *          tags: [Bitacoras]
 */



router.post('/bitacora/', saveBitacora)

/**
 * @swagger
 * /bitacora:
 *      post:
 *          summary:  Save a new bitacora.
 *          tags: [Bitacoras]
 */

router.put('/bitacora/:id', updateBitacora)
/**
 * @swagger
 * /bitacora:
 *      put:
 *          summary: Update de info of bitacora.
 *          tags: [Bitacoras]
 */


router.delete('/bitacora/:id', deleteBitacora)
/**
 * @swagger
 * /bitacora:
 *      delete:
 *          summary: Delete items on bitacora.
 *          tags: [Bitacoras]
 */

export default router;