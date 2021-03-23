import koa from 'koa'
import path from 'path'
import helmet from 'koa-helmet'
import statics from 'koa-static'
import router from './routes/routes'
import proxy from  'koa-server-http-proxy'
import koaBody from 'koa-body'
import jsonutil from 'koa-json'
import cors from '@koa/cors'
import compose from 'koa-compose'
import compress from 'koa-compress'
import superagent from 'superagent'

const app = new koa()

const isDevMode = process.env.NODE_ENV === 'production' ? false : true
app.use(proxy('/apis', {
  target: 'http://111.207.16.226:88/uapws/rest/lierservice/lierutil',
  pathRewrite: { '^/apis': ' '},
  changeOrigin: true
}))

/**
 * 使用koa-compose 集成中间件
 */
const middleware = compose([
  koaBody(),
  statics(path.join(__dirname, '../public')),
  cors(),
  jsonutil({ pretty: false, param: 'pretty' }),
  helmet(),
])
if (!isDevMode) {
  app.use(compress())
}
app.use(middleware)
app.use(router())
app.listen(3000)