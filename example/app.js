const Koa = require('koa');
const path = require('path');
const ctrlRouter = require('koa-ctrl-router');

const app = new Koa();

// 使用中间件
app.use(ctrlRouter(path.resolve(__dirname, './controllers')));

app.listen(3000);