const express =require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//import routes
const animalRoutes = require('./routes/animals');

//app middleware
app.use(bodyParser.json());
app.use(cors());

app.use(animalRoutes);

const PORT = 8070;

const DB_URL = 'mongodb+srv://anjali:anjali123@cluster0.2ph1drc.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(DB_URL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>{
    console.log("DB Connect Succesfully");
})
.catch((err)=> console.log("DB Connection error",err));

app.listen(PORT,() =>{
    console.log(`App is Running On ${PORT}`);
});