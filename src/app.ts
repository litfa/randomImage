import express from 'express'
import config from './utils/config'
import router from './router/index'

const app = express()

app.use(config.apiBaseUrl || '/', router)

app.listen(config.port || 3000, () => {
  console.log(`Server is listening on port ${config.port || 3000}`)
})