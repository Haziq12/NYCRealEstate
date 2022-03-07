import { Router } from 'express'
import * as housesCtrl from '../controllers/houses.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', housesCtrl.index)

// POST - localhost:3000/houses
// router.post('/', isLoggedIn, housesCtrl.create)

export {
  router
}