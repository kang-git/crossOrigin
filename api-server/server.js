const Koa = require('koa')
const app = new Koa()

const KoaRouter = require('koa-router')
const router = new KoaRouter()

// 后台解决跨域响应头配置
app.use(async (ctx, next) => {
    // 请求源白名单
    const allowedOrigins = ['http://127.0.0.1:3000']
    const requestOrigin = ctx.headers.origin
    if(allowedOrigins.includes(requestOrigin)) {
        ctx.set('Access-Control-Allow-Origin', requestOrigin)
        ctx.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
        ctx.set('Access-Control-Allow-Headers', 'Content-Type')
        ctx.set('Access-Control-Allow-Credentials', 'true')
    }
    await next()
})

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