import { Router } from 'express'
import * as apartmentsCtrl from '../controllers/apartments.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


router.get('/', apartmentsCtrl.index)

router.get('/:id/edit', isLoggedIn, apartmentsCtrl.edit)

router.put("/:id", isLoggedIn, apartmentsCtrl.update)

router.delete("/:id/delete", isLoggedIn, apartmentsCtrl.delete)



export {
  router
}