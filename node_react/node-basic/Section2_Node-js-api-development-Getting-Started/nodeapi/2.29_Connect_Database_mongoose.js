const express = require("express");
const app = express();
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

// Database Connection
mongoose.connect(
    process.env.MONGO_URI,
    {useNewUrlParser: true}
)
    .then(() => console.log('Database Connected'))

mongoose.connection.on("error", err => {
    console.log((`Database Connection Error: ${err.message}`));
})

// Bring in routes
const postRoutes = require("./routes/post");

// Middleware
app.use(morgan("dev"));

app.use("/", postRoutes);

const port = process.env.PORT || 8080; // If the port is available in the .env file, it will be used. Otherwise 8080
app.listen(port, () => {
    console.log(`A Node JS API is listening on port: ${port}`)
});
