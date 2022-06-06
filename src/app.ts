import express from 'express'
import config from './utils/config'
import router from './router/index'
import { logger } from './utils/log'

const app = express()

app.use('*', (req, res, next) => {
  next()
  const userIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress
  logger.info(
    `ip:${userIp} ${req.ip}  请求:${req.path}  user-agent:${req.headers['user-agent']}`
  )
})

app.use(config.apiBaseUrl || '/', router)

app.listen(config.port || 3000, () => {
  console.log(`Server is listening on port ${config.port || 3000}`)
})