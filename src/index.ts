import * as express from 'express'

const app: express.Express = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const router: express.Router = express.Router()
router.get('/api/getTest', (req: express.Request, res: express.Response) => {
  res.send(req.query)
})
app.use(router)

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})
