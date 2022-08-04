const express = require('express')
const cors = require('cors')

const app = express()
const { default: axios } = require("axios");


app.use(cors())
app.use(express.json())

app.listen(5000, () => console.log('Server running on 5000'))

// const {getCloset, addClothes, deleteClothes} = require('./controller')
// app.post('/api/', addClothes)
// app.delete('/api/houses/:id', deleteClothes)
app.get('/api/lines/brand/', (req,res) =>{
    res.status(200).send({
    })
},)

