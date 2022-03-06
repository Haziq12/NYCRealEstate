import { Router } from 'express'
import * as apartmentsCtrl from '../controllers/apartments.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


router.get('/', apartmentsCtrl.index)

// POST - localhost:3000/houses
router.post('/', isLoggedIn, apartmentsCtrl.create)

export {
  router
}