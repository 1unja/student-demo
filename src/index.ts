import express from 'express'
const app = express()
const port = 3000

const data = {
  persons: [
    {id: 1, title: 'warm'},
    {id: 2, title: 'cold'},
    {id: 3, title: 'fresh'}
  ]
}

app.get('/', (req, res) => {
  res.send('hell')
})
app.get('/home', (req, res) => {
  let foundQuery = data.persons

  if (req.query.title) {
    foundQuery = foundQuery
      .filter(c => c.title.includes(req.query.title as string))
  }

  res
    .status(200)
    .json(foundQuery)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})