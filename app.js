const express = require('express')
const app = express()
const session = require('express-session')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 3000
const cartItem = []
let cartId = 1

const corsOptions = {
  origin: true,
  credentials: true
}

app.use(
  session({
    secret: 'ginger',
    name: 'ginger',
    resave: 'false',
    saveUninitialized: 'false'
  })
)
app.use(cors(corsOptions))

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/redirect', (req, res) => {
  res.redirect(req.headers.referer)
  console.log('redirect to', req.headers.referer)
})

app.post('/cart', (req, res) => {
  if (!req.session.cartId) {
    req.session.cartId = cartId++
    req.session.save()
  }

  // store data
  const existRecord = cartItem.filter(item => {
    return item.cartId === req.session.cartId && item.productId === req.body.productId
  })
  if (existRecord.length === 1) {
    existRecord[0].quantity += req.body.quantity
  } else {
    cartItem.push({
      cartId: req.session.cartId,
      productId: req.body.productId,
      quantity: req.body.quantity
    })
  }

  // get data
  const itemArrayByCartId = cartItem.filter(item => {
    return item.cartId === req.session.cartId
  })

  res.json({
    itemArrayByCartId
  })
})

app.listen(port, () => {
  console.log(`Express is running on ${port}`)
})
