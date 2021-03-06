import { Router } from 'express'
import * as profilesCtrl from '../controllers/profiles.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/:id', isLoggedIn, profilesCtrl.show)

// POST - localhost:3000/profiles/:id/houses
router.post("/:id/houses", isLoggedIn, profilesCtrl.createHouse)

// POST - localhost:3000/profiles/:id/houses
router.post("/:id/apartments", isLoggedIn, profilesCtrl.createApartment)


export {
  router 
}