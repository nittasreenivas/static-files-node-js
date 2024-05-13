const express = require('express')
const app = express()

app.use(express.json())
app.use(express.static(__dirname+"/public"))
app.get('/',(req,res) => {
    res.sendFile(__dirname+"/home.html")
})
// app.get('/images/bicycle-01.jpg',(req,res) => {
//     res.sendFile(__dirname+"/images/bicycle-01.jpg")
// })
// app.get('/images/bicycle-02.jpg',(req,res) => {
//     res.sendFile(__dirname+"/bicycle-02.jpg")
// })
// app.get('/images/bicycle-03.jpg',(req,res) => {
//     res.sendFile(__dirname+"/bicycle-03.jpg")
// })
const port = 3600

app.listen(`${port}`,() =>{
console.log(`server is running on port ${port}`)
})