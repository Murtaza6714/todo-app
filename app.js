const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
require('dotenv').config()

const MONGODB_URI = `mongodb+srv://Murtaza:0WQKK39Wz7aD0Svd@cluster0.9jeqk.mongodb.net/Todo-App?`
const app = express();
const todoRoutes = require('./routes/todo.route') 

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use(todoRoutes)
console.log(process.env.MONGO_USER);
mongoose.connect(MONGODB_URI,{ useUnifiedTopology: true })
.then(result => {
  app.listen( process.env.PORT ||3000)
  console.log('app is running on port 3000');
}).catch(err => {
  console.log(err);
})