const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

// 创建路由实例对象
router
  .get('/', async (ctx, next) => {
    ctx.body = 'Hello World'
  })
  .post('/users', async (ctx, next) => {
    // 增加新的用户
    ctx.body = 'Hello World--post'
  })
  .put('/users/:id', async (ctx, next) => {
    // 修改参数id对应的用户数据
    ctx.body = 'Hello World--put'
  })
  .del('/users/:id', async (ctx, next) =>{
    // 删除参数id对应的用户数据
    ctx.body = 'Hello World--del'
  })
  .all('/users/:id', async(ctx, next) => {
    // ...
  })
app.use(router.routes())
app.listen(3000)
