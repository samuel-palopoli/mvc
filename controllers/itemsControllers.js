const app = require('../../startup.js')
const itemModels = require("../models/itemModels.js")
const path = require("path")

app.get("/getItem",(req, res) => {
   const item = itemModels

   item.name = "car"
   item.description = "blue Porsche"

   res.json(item.toJSON())
})
app.get("/", (req, res) =>{
    res.sendFile(path.resolve('mvc/views/itemsViews.html'))
})