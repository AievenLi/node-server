import Router from 'koa-router'
import wxqiye from '../api/wxqiye'
const router =new Router()

router.get('/getwxToken',wxqiye.getwxToken)
router.get('/gologin',wxqiye.gologin)
export default router