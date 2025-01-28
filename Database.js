const mongoose=require('mongoose');
const mongooseUrl='mongodb://localhost:27017/Restaurants';
mongoose.connect(mongooseUrl,{useNewUrlParser:true,useUnifiedTopology:true});
const db=mongoose.connection;

db.on('error',(err)=>{
    console.log("Fetch A Error");
});

db.on('connected',()=>{
    console.log('Connected to the database');
});

db.on('disconnected',()=>{
    console.log('Disconnected from the database');
});

exports.db=db;