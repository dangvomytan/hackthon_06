import bodyParser from "body-parser";
import cors from "cors";
import RouterStudent from "./Routers/Student.Router";
const express = require('express');
const app = express();



//middleware
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors())

//router
app.use("/apis/v1/students",RouterStudent)
//handler error

export default app;