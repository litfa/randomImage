import { join } from 'path'
import { readdirSync } from 'fs'
import config from './config'
import { CronJob } from 'cron'

export default class RandomImg {
  private random = () => {
    const dir = join(process.cwd(), config.imgUrl || './data/images/')
    const images = readdirSync(dir)
    const index = Math.floor(Math.random() * images.length)
    return dir + images[index]
  }
  private refresh = () => {
    this.path = this.random()
    new CronJob(
      config.cron,
      () => {
        this.path = this.random()
      },
      null,
      true
    )
  }
  public path: string
  constructor() {
    this.refresh()
  }
}