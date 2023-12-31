const axios = require('axios')
const path = require('path')
const KoaRouter = require('koa-router')
const views = require('koa-views')
const Koa = require('koa')
const app = new Koa()
const router = new KoaRouter()


app.use(views(path.join(__dirname, './'), {extension: 'html'}))
console.log('router', router.get)
router.get('/', demo).get('/demo.html', demo)

async function demo(ctx) {
    await ctx.render('demo')
}

app.use(router.routes())
app.use(router.allowedMethods())

const port = 3000
const host = '127.0.0.1'
app.listen(port, host)
console.log(`FrontEnd Server running on http://${host}:${port}`)