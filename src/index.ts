import express from 'express'
import path  from 'path'
const app = express()
const port = process.env.PORT || 3000

let data = {
  persons: [
    {id: 1, title: 'warm'},
    {id: 2, title: 'cold'},
    {id: 3, title: 'fresh'}
  ]
}

let products = [{title: 'tomato'}, {title: 'orange'}]
const adresses = [{value: 'lonaLit 11'}, {value: 'ovanTu 12'}]

app.get('/', (req, res) => {
  res.sendFile(path.resolve('src/main.html'))
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
app.get('/products', (req, res) => {
  res.json(products)
})
app.get('/adresses', (req, res) => {
  res.json(adresses)
})
app.get('/products/:productTitle', (req, res) => {
  let productChoise = products.find(c => c.title === req.params.productTitle)
  res.json(productChoise)
})
app.delete('/data/:id', (req, res) => {
  if (req.params.id) {
    data.persons = data.persons
      .filter(c => c.id !== +req.params.id)
  }

  res.json(data.persons)
})
app.post('')

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})