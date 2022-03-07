import { Router } from 'express'
import * as apartmentsCtrl from '../controllers/apartments.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()


router.get('/', apartmentsCtrl.index)


export {
  router
}