const express=require('express');
const app=express();
const port=3000;
const mongoose=require('./Database');
const Person=require('./models/person');
const Menu=require('./models/Menu');
app.get('/',(req,res)=>{
    res.send('Hello Let Complete MongoDB And ExpressJS');
});

app.get('/person',async (req,res)=> {
    try{
        console.log('Person API Called');
        
        const person=await Person.find();
        res.json(person);

    }
    catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/person',async (req,res)=> {
    try{
        console.log('Person API Called');
        const newPerson=new Person(req.body);
        const result=await newPerson.save();
        res.json(result);
    }
    catch(err){
        // console.log(err);
        res.status(500).send('Internal Server Error');
    }
});

app.post('/Menu',async (req,res)=>{
    try{
        console.log('Menu API Called');
        const newMenu=new Menu(req.body);
        const result=await newMenu.save();
        res.json(result);
    }
    catch(err){
        console.log(err);
        res.status(500).send('Internal Server Error');
    }
}
);



app.get('/Menu',async (req,res)=>{
    try
    {
        console.log("Data Is Get");
        const data=await Menu.find();
        res.json(data);
    }
    catch(err)
    {
        Console.log("Got An Error");
        res.status(400).send('Internal Server Error');
    }
})
console.log("just for testing purpose bro");
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});
//just for testing purpose