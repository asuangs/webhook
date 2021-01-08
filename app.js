const Koa = require('koa');
const ModelDb = require('./db')

const app = new Koa();

app.use(async (ctx) => {
  await ModelDb.save({
  title: 'title',
  body: 'body',
  date: new Date()
  })
  let data = await ModelDb.query()
   ctx.body = data
   
})

app.listen(3000);