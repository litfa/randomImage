/*
 * @Author: litfa
 * @Date: 2022-04-09 15:59:18
 * @LastEditTime: 2022-04-09 17:01:38
 * @LastEditors: litfa
 * @Description: bing风景图
 * @FilePath: /st/scripts/bing-image.mjs
 *
 */
// https://api.ixiaowai.cn/gqapi/gqapi.php
let num = await question('数量? ')
function toBuffer (ab) {
  var buf = new Buffer.alloc(ab.byteLength)
  var view = new Uint8Array(ab)
  for (var i = 0; i < buf.length; ++i) {
    buf[i] = view[i]
  }
  return buf
}
for (let i = 1; i <= Number(num); i++) {
  let file = await fetch('https://api.ixiaowai.cn/gqapi/gqapi.php')
  const url = await file.url
  console.log(url)
  const arrayBuffer = await file.arrayBuffer()
  await fs.writeFileSync(`./img/${Date.now()}.jpg`, toBuffer(arrayBuffer))
}