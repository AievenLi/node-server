import combineRoutes from 'koa-combine-routers'

import publicRouter from './publicRouter'
//请求微信
import wxqiye from './wxqiye'


export default combineRoutes(publicRouter,wxqiye)
