// const express = require('express')
// const cors = require('cors')

// const app = express()
const { default: axios } = require("axios");

// app.use(cors())
// app.use(express.json())

// axios
//   .post("https://www.clo-set.com/api/account/token", {
//     Email: "salloum1@msu.edu",
//     Password: "EEQ#B@p5gdJm4h4",
//   })
//   .then((response) => console.log(response));

axios
  .get("https://www.clo-set.com/api/lines?brandId=275848", {
    headers: {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2NjA4NTcxNDUsInVzZXJJZCI6MjY1NTgwLCJlbWFpbCI6InNhbGxvdW0xQG1zdS5lZHUiLCJwcm92aWRlciI6MCwic3ViZG9tYWluIjoid3d3IiwiaXNzIjoid3d3LmNsby1zZXQuY29tIiwid2ViVXNlciI6ZmFsc2UsImluc3RhbmNlSWQiOm51bGx9.iDAKQYQWC1PdWHoUK88foxPkZ3JQj33SxxS36twVvnA",
    },
  })
  .then((res) => console.log(res));
// app.listen(5000, () => console.log("Server running on 5000"));

// const {getCloset, addClothes, deleteClothes} = require('./controller')
// app.post('/api/', addClothes)
// app.delete('/api/houses/:id', deleteClothes)
// app.get("/api/lines/brand/", (req, res) => {
//   res.status(200).send({});
// });
