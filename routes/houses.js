import { Router } from 'express'
import * as housesCtrl from '../controllers/houses.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', housesCtrl.index)

router.get('/:id/edit', isLoggedIn, housesCtrl.edit)

router.put("/:id", isLoggedIn, housesCtrl.update)

router.delete("/:id/delete", isLoggedIn, housesCtrl.delete)

// POST - localhost:3000/houses
// router.post('/', isLoggedIn, housesCtrl.create)

export {
  router
}