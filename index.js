const app = require("express")
const cors = require("cors")
const HomePageTemplate = require("./views/index.js")

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(cors())
app.use(express.static("public"))

app.get("/", (req, res) => {
  res.send(HomePageTemplate())
})

app.get("/long-margin", (req, res) => {
  res.send(FormTemplate(long))
})

app.get("/short-margin", (req, res) => {
  res.send(FormTemplate(short))
})

app.post("/long", (req, res) => {
  const {entry, profit, loss} = req.body
  const takeProfit = entry+(entry*(profit/100))
  const stopLoss = entry-(entry*(profit/100))
  res.send(`TP = ${takeProfit}\n SL = ${stopLoss}`)
})

app.post("/short", (req, res) => {
  const {entry, profit, loss} = req.body
  const takeProfit = entry-(entry*(profit/100))
  const stopLoss = entry+(entry*(profit/100))
  res.send(`TP = ${takeProfit}\n SL = ${stopLossp}`)
})

const port = 3000

app.listen(port, (res, err) => {
  try{
   res.send("connection established...")
   console.log(`App listening on ${port}`)
  }
  catch{
   res.send("Rejected connection,try again")
   console.log(`Error occured at ${err}`)
  }
})