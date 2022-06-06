import { Router } from 'express'
import { join } from 'path'
import { readdirSync } from 'fs'
import config from '../utils/config'
import RandomImg from '../utils/randomImg'

const router = Router()

const randomImg = new RandomImg()

router.get('/', (req, res) => {
  res.type('image/jpeg')
  res.sendFile(randomImg.path)
})

export default router