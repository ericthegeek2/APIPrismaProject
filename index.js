const express = require('express')
const app = express()
const port = process.env.PORT || 8000

const router = require('./v1/Router/routes')


app.use(express.json())
app.use(router)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))









