const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  const router = express.Router()

  router.get('/data', (req, res) => {
    res.status(200).send({ data: 'Hello World!' })
  })

  router.get('/404', (req, res) => {
    res.status(404).send({ message: '页面走丢了' })
  })

  router.get('/403', (req, res) => {
    res.status(403).send({ message: '这..不能看!' })
  })

  server.use('/mock', router)

  server.all('*', (req, res) => {
    return handle(req, res)
  })

  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
