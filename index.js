require('dotenv').config();
const express =require('express')
const  mongoose =require('mongoose')
const routes =require('./routes')
const mongoString = process.env.DATABASE_URL;
const app = express();
app.use(express.json());
app.use('/api', routes)
mongoose.connect(mongoString);
const database = mongoose.connection;
database.on('error',(err)=>console.log(err))
database.on('connected',()=>console.log('data base connected'))
app.listen(3000,()=>{
    console.log("server running")
})

