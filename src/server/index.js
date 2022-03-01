const express = require("express");
const axios = require("axios");
var bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.post("/api/getZipcode", (req, res) => {
  console.log("req body: ", req.body);
  //incoming data zip code

  //use that to call the weather api
  axios
    .get(
      "http://api.openweathermap.org/data/2.5/forecast?lat=51.5073&lon=-0.1277&appid=6c24556903e226328fbee9d2b88f1f59"
    )
    .then((data) => {
      console.log("data: ", data.data.list);
      res.status(200).send({ weatherData: data.data.list });
    })
    .catch((err) => {
      console.log("error: ", err);
      res.send(err);
    });

  // res.send({ zipcode: req.body.test });
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
