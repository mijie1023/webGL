const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
  ctx.body = 'Hello Koa !';
});

console.log("use port 3000.");
app.listen(3000);