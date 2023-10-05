const koa = require('koa');
const compose = require('koa-compose');
const app = new koa();

async function middleware1(ctx, next){
  // do something
  await next();
}

async function middleware2(ctx, next){
  // do something
  await next();
}

async function middleware3(ctx, next){
  // do something
  await next();
}

const all = compose([middleware1, middleware2, middleware3])
app.use(all)
app.listen(3000)