const express = require("express")
const app = express()
const dotenv = require("dotenv")
const helmet = require("helmet")
const morgon = require("morgan")
dotenv.config()

mongoose.connect(
    process.env.MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
      console.log("Connected to MongoDB");
    }
  );

//middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.listen(8800, () => {
  console.log("Backend server is running!");
});
