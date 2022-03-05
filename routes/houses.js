import { Router } from 'express'
import * as housesCtrl from '../controllers/houses.js'

const router = Router()

router.get('/', housesCtrl.index)

export {
  router
}