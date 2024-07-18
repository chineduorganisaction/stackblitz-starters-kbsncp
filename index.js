const app = require("express")
const http = require("http")
const cors = require("cors")

app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use(express.static("public"))

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