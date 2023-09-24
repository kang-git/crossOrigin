const Koa = require('koa')
const app = new Koa()

const KoaRouter = require('koa-router')
const router = new KoaRouter()

// api
router.post('/api/task', async (ctx, next) => {
    ctx.status = 200
    ctx.body = {
        code: 200,
        success: true,
        data: '任务创建成功 ~~'
    }
})

app.use(router.routes())
app.use(router.allowedMethods())

const port = 4000;
const host = '127.0.0.1'

app.listen(port, host)
console.log(`BackEnd Server running on ${host}:${port}`)