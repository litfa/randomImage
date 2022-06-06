import { readFileSync } from 'fs'
import { resolve } from 'path'
let config: any
try {
  config = JSON.parse(readFileSync(resolve('./data/config/config.json')) as any)
} catch (e) {
  console.log('配置文件异常', e)
}

export default config