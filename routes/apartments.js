import { Router } from 'express'
import * as apartmentsCtrl from '../controllers/apartments.js'

const router = Router()


router.get('/', apartmentsCtrl.index)

export {
  router
}