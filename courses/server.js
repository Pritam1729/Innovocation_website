require("dotenv").config();
mongoose = require('mongoose');
const express = require("express");
const dbConnect = require("./dbConnect");
const movieRoutes = require("./routes/movies");
const cors = require("cors");
const app = express();

// mongoose.connect(process.env.DB,function(){
//     console.log("DataBase connected")
// })

dbConnect();



app.use(express.json());
app.use(cors());

app.use("/api", movieRoutes);

const port = process.env.PORT || 8118;
app.listen(port, () => console.log('Listening on port ${port}...'));