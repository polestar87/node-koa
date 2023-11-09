const koa = require('koa');
const app = new koa();

let logger = async function(ctx, next){
  console.log(ctx.method + ctx.host + ctx.url);
  await next();
}
app.use(logger);
app.use(async function(ctx,next){
  ctx.body = 'Hello World'
})

// app.use(async (ctx, next) => {
// ctx.throw(500)
//   if(ctx.request.method === 'POST'){

//   } else if(ctx.request.method === 'GET'){
//     if(ctx.request.path !== '/'){
//       ctx.response.type = 'html';
//       ctx.response.body = '<a href="/">Go To Index</a>'
//     } else {
//       ctx.response.body = 'hello world'
//     }
//   }
  // let postdata = '';
  // ctx.req.on('data', (data) => {
  //   postdata += data
  // })
  // ctx.req.on('end', () => {
  //   console.log(postdata);
  // })
  // ctx.response.body = {
  //   url: ctx.request.url,
  //   query: ctx.request.query,
  //   querystring: ctx.request.querystring,
  // }
  // await next();
  // ctx.response.type = "text/html";
  // ctx.response.body = '<h1>hello world</h1>'
// })

app.listen(3000, () => {
  console.log('server is running at http:localhost:3000');
});