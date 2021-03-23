import Router from 'koa-router'
import publicController from '../api/PublicController'
import testdata from '../api/test'

const router = new Router()

router.get('/getCaptcha', publicController.getCaptcha)
router.get('/test', testdata.test)

export default router
